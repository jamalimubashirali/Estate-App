import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routers/user_router.js'

dotenv.config();

mongoose.connect(process.env.MONGOS).then(() => {
    console.log("Connection Successful");
}).catch ((err) => {
    console.log(err);
});

const app = express();
app.listen(3000 , () =>{
    console.log("Server is running on port 3000!!");
});

app.use('/api/user' , userRouter);