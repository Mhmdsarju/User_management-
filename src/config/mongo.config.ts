import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectMongoDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);

    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Connection Error");

    process.exit(1);
  }
};