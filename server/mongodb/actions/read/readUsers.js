import connectDB from "../..";

export default async function readUsers() {
    try {
        await connectDB();
        let res = await User.find();
        let withoutpw = []
        res.map((user) => {
            withoutpw.push({ fullName: user.fullName,
                                email: user.email,
                                admin: user.admin });
        })
        return withoutpw;
    } catch (e) {
        throw(e);
    }
}