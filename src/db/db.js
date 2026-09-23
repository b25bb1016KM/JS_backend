import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const  connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}`);
        console.log(`\n MONGO DB CONNECTED!! DB_HOST:${ connectionInstance.connection.host}`); //check connectionInstance variable
        

    }
    catch (error){
        console.log("MONGODB Connection error: ", error);
        process.exit(1)
        
    }
}
export default connectDB;
