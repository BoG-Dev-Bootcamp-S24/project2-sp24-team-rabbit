import connectDB from "..";
import TrainingLog from "../../models/TrainingLog";

export default async function updateAnimalHours(data) {
    try {
        await connectDB();
        const { animalId } = data;
        if (!animalId) {
            const e = new Error("Animal ID required");
            e.name = "InvalidParametersError";
            throw e;
        }
        let checkAnimal = await Animal.findById(animalId);
        if (!checkAnimal) {
            const e = new Error("Animal Not Found");
            e.name = "AnimalNotFoundError";
            throw e;
        }
        const logs = await TrainingLog.find({ animalId: animalId });
        let totalHours = 0;
        logs.map((log) => {
            totalHours += log.hours;
        })
        await Ticket.findByIdAndUpdate(animalId, { hoursTrained: totalHours });
        return true;
    } catch (e) {
        console.log(e)
        if (e.name === "InvalidParametersError" || e.name === "AnimalNotFoundError") {
            throw e;
        }
        throw new Error("Failed")
    }
}