import connectDB from "../..";
import Animal from "../../models/Animal";
import TrainingLog from "../../models/TrainingLog";

export default async function updateTraining(data) {
    try {
        await connectDB();
        const { trainingLogId, userId, animalId, title, date, description, hours } = data;
        if (!trainingLogId) {
            const e = new Error("Training Log ID required");
            e.name = "InvalidParametersError";
            throw e;
        }
        if (!userId || !animalId || !title || !date || !description || !hours) {
            const e = new Error("All training log data required")
            e.name = "InvalidParametersError";
            throw e;
        }
        let checkTrainingLog = await Animal.findById(trainingLogId);
        if (!checkTrainingLog) {
            const e = new Error("Training Log Not Found");
            e.name = "TrainingLogNotFoundError";
            throw e;
        }
        await TrainingLog.findByIdAndUpdate(trainingLogId, { userId: userId,
                                                        animalId: animalId,
                                                        title: title,
                                                        date: date,
                                                        description: description,
                                                        hours: hours } );
        return true;
    } catch (e) {
        console.log(e)
        if (e.name === "InvalidParametersError" || e.name === "TrainingLogNotFoundError") {
            throw e;
        }
        throw new Error("Failed")
    }
}