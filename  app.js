import express from "express"
import { connectDB } from "./config/database.js";
import dotenv from "dotenv"

import errorMiddleware from "./middlewares/Error.js";
import userRouter from './routes/user.js'


const app = express();


dotenv.config({path : "./config/config.env"})
connectDB();

app.use('/user', userRouter);

app.use(errorMiddleware);


app.listen(process.env.PORT,()=>console.log(`server is working`) )