import bcrypt from "bcryptjs";
import User from "../models/User";
import connectDB from "..";

export default async function verifyUsers(email, password) {
  try {
    await connectDB();
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Incorrect password");
    }
    return { user: user._id, admin: user.admin, fullName: user.fullName };
  } catch (error) {
    console.error("Error verifying user:", error.message);
    throw error;
  }
}