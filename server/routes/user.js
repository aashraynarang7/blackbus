const express = require("express");
const { userModel } = require("../models/model");
const router = express.Router();
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const jwt_secret = "doradaexplorer";
const bcrypt = require("bcrypt");
router.post("/signup", async (req, res) => {
  const { email, name, password, phone } = req.body;
  const adminBody = z.object({
    name: z.string().min(1).max(50),
    email: z.string().min(1).max(100).email(),
    password: z.string().min(8).max(15),
    phone: z.string().min(10).max(10),
  });
  const salt = bcrypt.genSaltSync(5);
  const hashedpassword=bcrypt.hashSync(password,salt);
  const zresponse = adminBody.safeParse(req.body);
  if (zresponse.success) {
    const response = await userModel
      .find({ email })
      .catch((error) => res.json({ error }));
    // console.log(response)
    if (response.length == 0) {
      await userModel
        .create({ email, name, password: hashedpassword, phone,salt })
        .then(() => {
          res.status(200).json({
            message: "success",
          });
        })
        .catch((error) => console.log(error));
    } else {
      res.status(403).json({
        message: "user exists",
      });
    }
  } else {
    res.status(400).json({
      message: "user validation failed",
    });
  }
});
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const response = await userModel
    .find({ email})
    .catch((err) => {
      res.json({ err });
    });
  console.log(response);
  let token;
  if (response.length != 0) {
    const salt =response[0].salt;
    const hashedpassword=bcrypt.hashSync(password,salt);
    if(hashedpassword===response[0].password){
    token = jwt.sign({ email }, jwt_secret);
    res.header("token", token);
    res.status(200).json({
      success: true,
      message: "logged in",
    });
    }
    else{
        res.status(403).json({
            message:"invalid credentials"
        })
    }
  }
  else{
    res.status(403).json({
        message:"invalid user"
    })
  }
});

router.get("/test", (req, res) => {
  const token = req.headers.token;
  res.json({
    token:token
  });
});
module.exports = {
  userRouter: router,
};
