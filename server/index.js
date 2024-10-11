const express = require('express');
const {json}=require('express')
const { db } = require('./db');
const { userRouter } = require('./routes/user');
const { bookingRouter } = require('./routes/booking');
const { locationRouter } = require('./routes/location');
const cors = require('cors');

const app = express();

function main(){
    app.use(json())
    app.use(cors())
    app.use("/users/v1", userRouter)
    app.use("/booking/v1", bookingRouter)
    app.use("/location/v1", locationRouter)
    db();
    app.listen(3000,()=>{
        console.log("listening on port 3000")
    });
    
}
main()