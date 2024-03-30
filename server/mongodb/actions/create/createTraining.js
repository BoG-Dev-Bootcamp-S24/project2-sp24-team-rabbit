import connectDB from "../..";
import TrainingLog from "../../models/TrainingLog";
import updateAnimalHours from "../update/updateAnimalHours";

export default async function createTraining(data) {
    try {
        await connectDB();
        const training = new TrainingLog(data);
        await training.save();
        await updateAnimalHours(training.animal);
        return true;
    } catch (e) {
        console.log(e);
        throw e;
    }
}