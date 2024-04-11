import createAnimal from "../../../server/mongodb/actions/createAnimal";
import updateHoursTrained from "../../../server/mongodb/actions/updateHoursTrained";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const {name, breed, hoursTrained, note} = req.body;
            if (!name || !breed || !hoursTrained || !note) {
                return res.status(400).send("Please check body and enter all required fields appropriately");
            } else {
                await createAnimal({name, breed, hoursTrained, note});
                return res.status(200).send("Success");
            }
        } catch (error) {
            return res.status(500).send("Failed");
        }
    } else if (req.method === "PATCH") {
        try {
            const {animal} = req.body;
            if (!animal) {
                return res.status(400).send("Please ensure you have entered the animal appropriately");
            } else {
                await updateHoursTrained({animal : animal});
                return res.status(200).send("Success");
            }
        } catch (error) {
            return res.status(500).send("Failed");
        }
    } else {
        res.status(405).send("Method not allowed");
    }
}