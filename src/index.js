import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

// Load environment variables from .env file in the root directory
dotenv.config({
    path: "./.env" // Ensure the correct path
});

// Connect to the database
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>
    console.log(`Sever is running at port:${process.env.PORT}`))
})
.catch((err)=>{
    console.log("MONGO db connection failed !!!", err);
})








/*
import express from "express"
const app = express()

( async () => {
    try{
         await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
         app.on("error",(error)=>{
            console.log("ERRR:",error);
            throw error
         })

         app.listen(process.env.PORT, ()=>{
            console.log(`App is listeing on port ${process.env.PORT}`);
         })
    } catch (error){
        console.log("ERROR:", error)
        throw err
    }
})() 
    */