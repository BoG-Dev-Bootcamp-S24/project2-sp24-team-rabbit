import bcrypt from "bcryptjs"
import User from "../models/User";
import connectDB from "..";

export default async function verifyUsers(email, password) {
    try {
        await connectDB();
        const user = await User.findOne({email});
        if (!user) {
            res.status(400).return("User Not Found");
        }
        console.log(user.password);
        const result = await bcrypt.compare(password, user.password);
        return result ? {user : user._id, admin : user.admin} : null;
    } catch (error) {
        console.log(error);
    }
}