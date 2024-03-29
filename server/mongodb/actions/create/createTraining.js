import connectDB from "../..";
import TrainingLog from "../../models/TrainingLog";

export default async function createTraining(data) {
    try {
        await connectDB();
        const training = new TrainingLog(data);
        await training.save();
        return true;
    } catch (e) {
        throw(e)
    }
}