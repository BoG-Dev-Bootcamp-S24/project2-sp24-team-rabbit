import connectDB from "..";
import TrainingLog from "../models/TrainingLog";
import { ObjectId } from "mongodb"

export default async function getUserLogs(userID) {
    try {
        await connectDB();
        const logs = await TrainingLog.find({user: new ObjectId(userID)})
            .populate('user', 'fullName') // Populate user field with fullName from User model
            .populate('animal', 'name breed') // Populate animal field with name and breed from Animal model
            .lean();
        return logs;
    } catch (error) {
        console.error("Error connecting to database", error);
        throw error;
    }
}