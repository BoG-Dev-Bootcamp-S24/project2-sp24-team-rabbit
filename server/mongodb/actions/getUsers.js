import connectDB from "..";
import User from "../models/User";

export default async function getUsers() {
    try {
        await connectDB();
        const users = await User.find();
        const mappedUsers = users.map(user => {
            return {fullName : user.fullName, email : user.email, admin : user.admin};
        });
        return JSON.stringify(mappedUsers);
    } catch (error) {
        console.error("Error connecting to database", error);
        throw error;
    }
}