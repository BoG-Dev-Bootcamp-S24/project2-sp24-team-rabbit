import connectDB from "../index.js"
import TrainingLog from "../models/TrainingLog.js";

export default async function updateTrainingLog(data) {
    try {
        await connectDB();
        const { trainingLog, newHours } = data;
        if (!trainingLog) {
            throw new Error('Need to provide the training log to update in the query');
        }
        const logExists = await TrainingLog.findByID(trainingLog);
        if (!logExists) {
            return "Training Log Not Found";
        }
        return await Animal.findByIdAndUpdate(animalExists._id, { hours : newHours }, { new: true });
    } catch (e) {
        console.log(e)
        throw new Error("Unable to update animal. Invalid data or database issue.")
    }
}