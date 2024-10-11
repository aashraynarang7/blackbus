const express = require("express");
const router = express.Router();
const axios=require("axios");
const { array } = require("zod");
router.post("/suggestions", async (req, res) => {
    const {query,latitude, longitude}=req.body;
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&location=${latitude},${longitude}&key=AIzaSyBBlmwKi0xR9aidNzZoLyfX-DjmVLPRGnA`
    );
    const obj= response.data.predictions;
    // const regex = /sublocality_level_(\d)/;
    // const resarr=[];
    // obj.forEach(element => {
    //     let digit;
    //     element.types.forEach(type=>{
    //         const match = type.match(regex);
    //         if(match){
    //             digit=match[1];
    //         }
    //         else{
    //             digit=10;
    //         }
    //     })
    //     element={...element,digit}
    // });
    res.json(obj);
  } catch (error) {
    console.error("Error fetching blah blah:", error);
    res.status(404).json({
        error
    })
  }
});


// router.get("/closer",(req,res)=>{
//     const {locations,checkpoint}=req.body;


// })
module.exports = {
  locationRouter: router,
};
