import getAnimals from "../../../server/mongodb/actions/getAnimals";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const animals = await getAnimals;
            return res.status(200).send(animals);
        } catch (error) {
            return res.status(500).send("Failed");
        }
    } else {
        res.status(405).send("Method not allowed");
    }
}