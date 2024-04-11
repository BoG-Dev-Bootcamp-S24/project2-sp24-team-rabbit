import createAnimal from "../../../server/mongodb/actions/createAnimal";
import getUserAnimals from "../../../server/mongodb/actions/getUserAnimals";
import updateHoursTrained from "../../../server/mongodb/actions/updateHoursTrained";

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
            return res.status(500).send("Failed to POST");
        }
    } else if (req.method === "GET") {
        try {
            const { userID } = req.body;
            if (!userID) {
                return res.status(400).send("Please enter a userID");
            } else {
                await getUserAnimals({userID});
                return res.status(200).send("Success");
            }
        } catch (error) {
            return res.status(500).send("Failed to GET");
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
            return res.status(500).send("Failed to PATCH");
        }
    } else {
        res.status(405).send("Method not allowed");
    }
}