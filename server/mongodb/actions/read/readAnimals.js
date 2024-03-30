import connectDB from "../..";

export default async function readAnimals() {
    try {
        await connectDB();
        let res = await Animal.find();
        return res;
    } catch (e) {
        throw(e);
    }
}