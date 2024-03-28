import connectDB from "../index.js"
import Animal from "../models/Animal.js";
import TrainingLog from "../models/TrainingLog.js";

export default async function updateHoursTrained(data) {
    try {
        await connectDB();
        const { animal } = data;
        if (!animal) {
            throw new Error('Need to provide the animal to update in the query');
        }
        const animalExists = await Animal.findByID(animal);
        if (!animalExists) {
            return "Animal Not Found";
        }
        let newHoursTrained = 0;
        const logs = await TrainingLog.find({ animal: animal });
        logs.forEach(log => {
            newHoursTrained += log.hoursTrained;
        })
        return await Animal.findByIdAndUpdate(animalExists._id, { hoursTrained : newHoursTrained }, { new: true });
    } catch (e) {
        console.log(e)
        throw new Error("Unable to update animal. Invalid data or database issue.")
    }
}