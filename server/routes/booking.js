const express =require("express");
const axios= require("axios");
const router=express.Router();

router.post("/makebooking",async(req,res)=>{
   const {userid,pickup,drop}=req.body;
   try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json`, {
        params: {
            origins: pickup, // Starting point
            destinations: drop, // Destination point
            mode: 'driving', // Travel mode: driving, walking, bicycling, transit
            key: "AIzaSyBBlmwKi0xR9aidNzZoLyfX-DjmVLPRGnA"
        },
    });
    const data = response.data;
    console.log(data)
    const distance = data.rows[0].elements[0].distance.text; // Get the distance in human-readable form
    const duration = data.rows[0].elements[0].duration.text; // Get the duration in human-readable form

    console.log(`Distance: ${distance}`);
    console.log(`Duration: ${duration}`);
    } catch (error) {
    console.error('Error fetching distance matrix:', error);
}
})

module.exports={
    bookingRouter:router
}