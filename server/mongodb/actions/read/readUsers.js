import connectDB from "../..";
import TrainingLog from "../../models/TrainingLog";

export default async function readUsers() {
    try {
        await connectDB();
        let res = await User.find();
        return res;
    } catch (e) {
        throw(e);
    }
}