import connectDB from "..";
import Animal from "../models/Animal";

export default async function getUsers() {
    try {
        await connectDB();
        return JSON.stringify(await Animal.find());
    } catch (error) {
        console.error("Error connecting to database", error);
        throw error;
    }
}