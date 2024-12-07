import mongoose from "mongoose";

const connectMongoDb =async () =>{
    try {
       await mongoose.connect("" ) //add your mongodb url here
        console.log("MongoDB Connected!")
    }catch (e){
        console.log(e)
    }

}

export default connectMongoDb;