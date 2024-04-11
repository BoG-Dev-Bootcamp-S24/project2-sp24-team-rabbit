import connectDB from "..";
import User from "../models/User";

export default async function getUsers() {
    try {
        await connectDB();
        const users = await User.find({}).lean();
        return JSON.stringify(users);
    } catch (error) {
        console.error("Error connecting to database", error);
        throw error;
    }
}