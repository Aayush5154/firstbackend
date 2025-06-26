// require('dotenv').config({path : './env'}) 
//for the improved version
import dotenv from "dotenv" // but ise config bhi krna padta ab (abhi doc me bhi available nhai hai)
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import connectDB from "./db";

dotenv.config({
    path : './env'
})

connectDB()





/*first approach 
import express from "express"
const app = express()

( async () => {
    try {
     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listning on port ${process.env.PORT}`);
        })
    }catch(error) {
        console.log("ERROR: ", error);
        throw error
    }
})()
*/
//we ha use IIFES () in the end so that it immediately runs 
//and in the starting of ;(async) we can use ; that is professional approach jab aap team me kaam ker ahe ho to 