import createAnimal from "../../../server/mongodb/actions/createAnimal";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const {name, breed, owner, hoursTrained, profilePicture} = req.body;
            if (!name || !breed || !owner || !hoursTrained || !profilePicture) {
                return res.status(400).send("Please check body and enter all required fields appropriately");
            } else {
                await createAnimal({name, breed, owner, hoursTrained, profilePicture});
                return res.status(200).send("Success");
            }
        } catch (error) {
            return res.status(500).send("Failed");
        }
    } else {
        res.status(405).send("Method not allowed");
    }
}