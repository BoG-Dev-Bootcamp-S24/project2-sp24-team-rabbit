import connectDB from "..";
import Animal from "../models/Animal";

export default async function createAnimal(data) {
    try {
        await connectDB();
        const user = new Animal(data);
        await user.save();
    } catch (error) {
        console.error("Error connecting to database", error);
        throw error;
    }
}