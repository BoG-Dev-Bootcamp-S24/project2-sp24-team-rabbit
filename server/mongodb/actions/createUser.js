import connectDB from "..";
import User from "../models/User";

export default async function createUser(data) {
    try {
        await connectDB();
        const {fullName, email, password, admin} = data;
        password = await bcrypt.hash(password, 10);
        const user = new User({fullName, email, password, admin});
        await user.save();
    } catch (error) {
        console.error("Error connecting to database", error);
        throw error;
    }
}