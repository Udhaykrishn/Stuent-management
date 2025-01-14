import mongoose from "mongoose"

export const connectDB = async () => {
    const connectionString = process.env.MONGODB_URI as string;
    console.log("database conneciton string",connectionString)
    try {
        await mongoose.connect(connectionString)
    } catch (error) {
        console.log(error)
        throw new Error("Failed to connect database")
    }
}