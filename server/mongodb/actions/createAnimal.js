import connectDB from "..";
import Animal from "../models/Animal";
import {ObjectId} from "mongodb"

export default async function createAnimal(data) {
    try {
        await connectDB();
        let { name, breed, owner, hoursTrained, profilePicture } = data
        const newAnimal = new Animal({name, breed, owner: new ObjectId(owner), hoursTrained, profilePicture})
        await newAnimal.save()
        return newAnimal;
    } catch (error) {
        console.error("Error connecting to database", error);
        throw error;
    }
}