import connectDB from "..";
import TrainingLog from "../models/TrainingLog";

export default async function getTrainingLogs() {
  try {
    await connectDB();

    const result = await TrainingLog.find({})
      .populate('user', 'fullName') // Populate user field with fullName from User model
      .populate('animal', 'name breed') // Populate animal field with name and breed from Animal model
      .lean();

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}