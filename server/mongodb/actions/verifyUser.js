import connectDB from "..";
import User from "../models/User";

export default async function verifyUser(data) {
    try {
        await connectDB();
        const { email, password } = data;
        if (!email || !password) {
            const e = new Error("Email or password not provided");
            e.name = "InvalidParametersError";
            throw e;
        }
        const user = User.find({ email: email });
        if (!user) {
            const e = new Error("User with this email not found");
            e.name = "InvalidParametersError";
            throw e;
        }
        if (user.password !== password) {
            const e = new Error("User password incorrect");
            e.name = "InvalidParametersError";
            throw e;
        }
        return { fullName: user.fullName, 
                    admin: user.admin };
    } catch (e) {
        console.log(e);
        throw e;
    }
}