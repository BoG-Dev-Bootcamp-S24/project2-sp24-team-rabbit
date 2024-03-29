import connectDB from "../..";
import Animal from "../../models/Animal";

export default async function createAnimal(data) {
    try {
        await connectDB();
        const animal = new Animal(data);
        await animal.save();
        return true;
    } catch (e) {
        throw(e)
    }
}