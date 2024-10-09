const mongoose=require('mongoose');
 const db=async()=>{
    await mongoose.connect("mongodb+srv://Aashray:Aashray28@cluster0.rahudvj.mongodb.net/blackbus")
    .then(()=>{
        console.log("connected to db");
    })
    .catch(error=>console.log(error));
}

module.exports={
    db
}
