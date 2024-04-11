import connectDB from "..";
import Animal from "../models/Animal";

export default async function getAnimals() {
  try {
    await connectDB();
    const result = await Animal.find({}).populate('owner', 'fullName').lean(); // populate owner with name from User model
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}