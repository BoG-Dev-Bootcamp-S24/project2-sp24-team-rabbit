import connectDB from "../index.js"
import TrainingLog from "../models/TrainingLog.js";
import {ObjectId} from "mongodb"

export default async function updateTrainingLog(logID, newHours) {
    try {
        await connectDB();
        const trainingLog = new ObjectId(logID);
        if (!trainingLog) {
            throw new Error('Need to provide the training log to update in the query');
        }
        const logExists = await TrainingLog.findById(trainingLog);
        if (!logExists) {
            throw new Error("Training Log Not Found");
        }
        return await TrainingLog.findByIdAndUpdate(trainingLog, { hours : newHours }, { new: true });
    } catch (e) {
        console.log(e)
        throw new Error("Unable to update animal. Invalid data or database issue.")
    }
}