import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

console.log("Full MongoDB URI:", `${process.env.MONGODB_URI}/${DB_NAME}`);
const connectDB = async () => {
     try{
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) //mongodb aapko ek object return kta hai
      console.log(`\n MongoDB connected !! DB Host : ${connectionInstance.connection.host}`)//this is the assignment 
      //data base production ka lag hota h testing ka alg hota h uske liye ham host se connect kr rahe h ye bata rahe h
     }catch(error)
     {
        console.log("MONGODB connection error ", error);
        process.exit(1);
        //hamari har current node application kisi na kisi process pe chal rahi hoti hai ye uska refrance hai 
     }
}


export default connectDB