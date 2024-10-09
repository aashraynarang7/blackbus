const mongoose = require("mongoose")
const { Schema, ObjectId } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  },
  phone: {
    type: String,
    required: true,
    unique:true,
  },
  salt:{
    type:String,
    required:true,
  }
});

const driverSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  },
  carNo:{
    type:String,
    required:true,
    unique:true,
  }
});
const bookingSchema = new Schema({
    userId: {
      type:ObjectId ,
      required: true,
    },
    driverId: {
      type: ObjectId,
      required: true,
    },
    fare:{
      type:Number,
      required:true,
    }
  });
const user = mongoose.model("user", userSchema);
const driver = mongoose.model("driver", driverSchema);

module.exports = {
  userModel: user,
  driverModel:driver,
};
