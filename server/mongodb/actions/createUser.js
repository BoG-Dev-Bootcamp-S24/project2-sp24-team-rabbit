import connectDB from "..";
import User from "../models/User";
import bcrypt from "bcrypt";

export default async function createUser(data) {
    try {
        await connectDB();
        let {fullName, email, password, admin} = data;
        console.log(typeof(password))
        password = await bcrypt.hash(password, 10);
        const user = new User({fullName, email, password, admin});
        await user.save();
    } catch (error) {
        console.error("Error connecting to database", error);
        throw error;
    }
}