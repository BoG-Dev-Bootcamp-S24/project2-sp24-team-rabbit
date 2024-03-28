import getTrainingLogs from "../../../server/mongodb/actions/getTrainingLogs";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const logs = await getTrainingLogs();
            return res.status(200).send(logs);
        } catch (error) {
            return res.status(500).send("Failed");
        }
    } else {
        res.status(405).send("Method not allowed");
    }
}