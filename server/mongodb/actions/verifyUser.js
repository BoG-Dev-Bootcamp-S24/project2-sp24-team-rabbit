import bcrypt from "bcryptjs"
import User from "../../../../server/mongodb/models/User";

export default async function verifyUsers(email, password) {
    const user = User.findOne(email);
    if (!user) {
        res.status(400).return("User Not Found");
    }
    const result = await bcrypt.compare(password, user.password);
    return result ? {user : user._id, admin : user.admin} : null;
}