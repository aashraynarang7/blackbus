const express = require('express');
const {json}=require('express')
const { db } = require('./db');
const { userRouter } = require('./routes/user');
const { bookingRouter } = require('./routes/booking');

const app = express();
app.use(json())


function main(){
    app.use("/users/v1", userRouter)
    app.use("/booking/v1", bookingRouter)
    db();
    app.listen(3000,()=>{
        console.log("listening on port 3000")
    });
    
}
main()