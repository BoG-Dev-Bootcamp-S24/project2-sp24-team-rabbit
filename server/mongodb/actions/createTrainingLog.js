import connectDB from "..";
import TrainingLog from "../models/TrainingLog";
import {ObjectId} from "mongodb"

export default async function createTrainingLog(data) {
    try {
        await connectDB();
        let { user, animal, title, date, description, hours} = data
        const newLog = new TrainingLog({user: new ObjectId(user), animal: new ObjectId(animal), title, date: new Date(date), description, hours})
        await newLog.save()
        return newLog;
    } catch (error) {
        console.error("Error connecting to database", error);
        throw error;
    }
}