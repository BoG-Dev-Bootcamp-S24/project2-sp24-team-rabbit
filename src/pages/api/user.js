import createUser from "../../../server/mongodb/actions/createUser";
import userExists from "../../../server/mongodb/actions/userExists";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const {fullName, email, password, admin} = req.body;
            let exists = await userExists(email);

            if (exists) {
                return res.status(400).send("Email already registered to an account");
            }
            if (!fullName || !email || !password || !admin) {
                return res.status(400).send("Please check body and enter all required fields appropriately");
            } else {
                await createUser({fullName, email, password, admin});
                return res.status(200).send("Success");
            }
        } catch (error) {
            return res.status(500).send("Failed");
        }
    } else {
        res.status(405).send("Method not allowed");
    }
}