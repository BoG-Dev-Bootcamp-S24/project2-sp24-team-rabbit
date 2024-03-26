
import connectDB from "..";
import Ticket from "../models/Animal";

export default async function updateTicketByUser(data) {
    try {
        await connectDB();
        const { ticketId, userId } = data;
        const updatedTicket = await Ticket.findByIdAndUpdate(
            ticketId,
            { userId: userId },
            { new: true }
        );
        if (updatedTicket) {
            console.log('Update successful:', updatedTicket);
            return true;
        } else {
            console.log('No document found with that ID');
            return false;
        }
    }
    catch (e) {
        console.log(e);
        return false;
    }
}