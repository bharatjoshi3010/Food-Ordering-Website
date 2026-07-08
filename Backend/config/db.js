import mongoose from "mongoose";

export const connectDB = async () => {
    // await mongoose.connect('mongodb+srv://joshibharat3010_db_user:helloo@cluster0.glx4t9m.mongodb.net/?appName=Cluster0').then(()=>{
    await mongoose.connect('mongodb+srv://manjuskitchenn:hello@cluster0.jwqf2e8.mongodb.net/food-del').then(()=>{
        console.log("DB Connencted");
    });
}
