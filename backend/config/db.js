import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://umabharamanaikar:uma123@cluster0.xz9ku.mongodb.net/').then(()=>{
       console.log('DB connected') ;
    })
}