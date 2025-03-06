import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dburl = process.env.DBURL;

const connectDb = async () => {
    try {
        await mongoose.connect(dburl)
        console.log("✅ Database Connected Successfully!");
    } catch (error) {
        console.error("❌ Unable to connect to the database:", error.message);
        process.exit(1); // Exit the process if DB connection fails
    }
};

export default connectDb;
