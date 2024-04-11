import connectDB from "..";
import Animal from "../models/Animal";
import { ObjectId } from "mongodb"

export default async function getUserAnimals(userID) {
    try {
        await connectDB();
        const animals = await Animal.find({owner: new ObjectId(userID)}).populate('owner', 'fullName');
        return animals;
    } catch (error) {
        console.error("Error connecting to database", error);
        throw error;
    }
}