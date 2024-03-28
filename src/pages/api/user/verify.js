import verifyUser from "../../../server/mongodb/actions/verifyUser";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const {email, password} = req.body;
            const user = await verifyUser(email, password);
            if (users) {
                return res.status(200).send(users);
            } else {
                return res.status(500).send("Incorrect email and password entered");
            }
        } catch (error) {
            return res.status(500).send("Failed");
        }
    } else {
        res.status(405).send("Method not allowed");
    }
}