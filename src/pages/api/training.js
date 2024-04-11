import createTrainingLog from "../../../server/mongodb/actions/createTrainingLog";
import getUserLogs from "../../../server/mongodb/actions/getUserLogs";
import updateTrainingLog from "../../../server/mongodb/actions/updateTrainingLog";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const {user, animal, title, date, description, hours} = req.body;
            if (!user || !animal || !title || !date || !description || !hours) {
                return res.status(400).send("Please check body and enter all required fields appropriately");
            } else {
                await createTrainingLog({user, animal, title, date, description, hours});
                return res.status(200).send("Success");
            }
        } catch (error) {
            return res.status(500).send("Failed");
        }
    } else if (req.method === "GET") {
        try {
            const { userID } = req.body;
            if (!userID) {
                return res.status(400).send("Please enter a userID");
            } else {
                const logs = await getUserLogs(userID);
                return res.status(200).send(logs);
            }
        } catch (error) {
            return res.status(500).send("Failed to GET");
        }
    } else if (req.method === "PATCH") {
        try {
            const {logID, hours} = req.body;
            if (!logID || !hours) {
                return res.status(400).send("Please ensure you have entered the training log and new hours appropriately");
            } else {
                await updateTrainingLog(logID, hours);
                return res.status(200).send("Success");
            }
        } catch (error) {
            return res.status(500).send("Failed");
        }
    } else {
        res.status(405).send("Method not allowed");
    }
}