import connectDB from "..";
import TrainingLog from "../models/TrainingLog";

export default async function createTrainingLog(data) {
    try {
        await connectDB();
        const user = new TrainingLog(data);
        await user.save();
    } catch (error) {
        console.error("Error connecting to database", error);
        throw error;
    }
}