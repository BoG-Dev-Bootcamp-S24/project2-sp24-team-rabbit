import connectDB from "../index.js"
import Animal from "../models/Animal.js";
import {ObjectId} from "mongodb"

export default async function updateHoursTrained(animal, hours) {
    try {
        await connectDB();
        if (!animal) {
            throw new Error('Need to provide the animal and hours to update in the query');
        }
        animal = new ObjectId(animal);
        const doc = await Animal.findByIdAndUpdate(animal, { $inc: { hoursTrained: hours } }, { new: true });
        return doc;
    } catch (error) {
        console.error(error);
        throw new Error("Unable to update animal. Invalid data or database issue.");
    }
}