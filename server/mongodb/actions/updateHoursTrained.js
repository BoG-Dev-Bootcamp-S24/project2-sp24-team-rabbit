import connectDB from "../index.js"
import Animal from "../models/Animal.js";
// import TrainingLog from "../models/TrainingLog.js";

export default async function updateHoursTrained(data) {
    // try {
    //     await connectDB();
    //     const { animal } = data;
    //     if (!animal) {
    //         throw new Error('Need to provide the animal to update in the query');
    //     }
    //     const animalExists = await Animal.findByID(animal);
    //     if (!animalExists) {
    //         throw new Error("Animal Not Found");
    //     }
    //     const logs = await TrainingLog.find({ animal: animal });
    //     const newHoursTrained = logs.reduce((totalHours, log) => totalHours + log.hoursTrained, 0);

    //     return await Animal.findByIdAndUpdate(animalExists._id, { hoursTrained: newHoursTrained }, { new: true });
    // } catch (e) {
    //     console.log(e)
    //     throw new Error("Unable to update animal. Invalid data or database issue.")
    // }
    try {
        await connectDB();
        const { animal, hours } = data;
        if (!animal) {
            throw new Error('Need to provide the animal and hours to update in the query');
        }
        const doc = await Animal.findOneAndUpdate(
            { _id: animal },
            { $inc: { hoursTrained: hours } },
            { new: true }
        );
        return doc;
    } catch (error) {
        console.error(error);
        throw new Error("Unable to update animal. Invalid data or database issue.");
    }
}