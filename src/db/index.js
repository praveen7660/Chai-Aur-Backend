import { DB_Name } from "../constants.js";
import mongoose from "mongoose";


const connectDB = async()=>{
    try{
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
        console.log("\n Connection is Successful",connectInstance.connection.host);

    }
    catch(error){
        console.log("An error HAS occured",error);
        process.exit(1);
    }

}

export default connectDB;