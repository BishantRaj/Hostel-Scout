import express from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose'
import auth from "./routes/auth.js"
import hotels from "./routes/hotels.js"
import rooms from "./routes/rooms.js"
import users from "./routes/users.js"
import cookieParser from "cookie-parser";
import cors from "cors"

const app=express()
dotenv.config()
mongoose.set('strictQuery', true);


const connect=async()=>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongo");
  } catch (error) {
    throw error
  }
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongo disconnected")
})

mongoose.connection.on("connected",()=>{
    console.log("mongo connected")
})

//middleware
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth",auth);
app.use("/api/hotels",hotels);
app.use("/api/rooms",rooms);
app.use("/api/users",users);

app.use((err,req,res,next)=>{
  const ers=err.status||500;
  const erm=err.message||"something went wrong";
  return res.status(ers).json({
    success:false,
    status:ers,
    message:erm,
    stack:err.stack,
  });
})

app.listen(8000,()=>{
    connect()
    console.log("conected")
})

//46.12