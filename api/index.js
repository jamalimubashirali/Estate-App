import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routers/user_router.js'
import authRouter from './routers/auth_router.js'

dotenv.config();

mongoose.connect(process.env.MONGOS).then(() => {
    console.log("Connection Successful");
}).catch ((err) => {
    console.log(err);
});

const app = express();
app.use(express.json());
app.listen(3000 , () =>{
    console.log("Server is running on port 3000!!");
});

app.use('/api/user' , userRouter);
app.use('/api/auth' , authRouter);