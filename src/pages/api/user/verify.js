import verifyUser from "../../../../server/mongodb/actions/verifyUser";
import cookie from "cookie"
import jwt from "jsonwebtoken"


export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const {email, password} = req.body;
            const user = await verifyUser(email, password);
            if (user) {
                const token = jwt.sign(user, "BoG");
                res.setHeader('Set-Cookie', cookie.serialize('session', token, {path: "/"}))
                return res.status(200).send(user);
            }
        } catch (error) {
            return res.status(500).send("Failed");
        }
    } else {
        res.status(405).send("Method not allowed");
    }
}