import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from './app.js'

dotenv.config({
 path:'./.env'
})






connectDB()
// async is returning its promise here
.then(()=>{
 app.listen(process.env.PORT||8000, () =>{
  console.log(`app is listening on: ${process.env.PORT}`);
 } )
})
.catch((err)=>{
 console.log("MONGODB connection failed !!", err);
})




/*

import express from "express";
const app=express()
(async()=>{
 try{
 await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
 app.on("error", (error)=>{
  console.log("ERR: ", error);
  throw error
 })
 app.listen(procee.env.PORT, () =>{
  console.log(`app is listening on ${process.env.PORT}`);
 })
}
catch(error){
 console.error("ERROR: ",error)
 throw err
}
})()
*/