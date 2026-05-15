import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://manjuskitchenn:hello@cluster0.jwqf2e8.mongodb.net/food-del').then(()=>{
        console.log("DB Connencted");
    });
}
