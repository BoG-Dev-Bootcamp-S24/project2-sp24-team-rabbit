import bcrypt from "bcryptjs";
import User from "../models/User";
import connectDB from "..";

export default async function userExists(email) {
    try {
        await connectDB();
        const user = await User.findOne({ email });
        if (!user) {
            console.log("User does not exist")
            return false;
        } else {
            console.log("User exists")
            return true
        }
    } catch (error) {
        console.log(error);
    }
}