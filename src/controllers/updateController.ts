import { Request, Response } from "express";
import User from "../models/user";

console.log('8')
const updateUser = async (req: Request, res: Response) => {
    console.log("hey")
    const userId = Number(req.params.id); // Convert to Number
    const { firstName, lastName, email, dob, phone, gender } = req.body;

    try {
        const [updated] = await User.update(
            { firstName, lastName, email, dob, phone, gender },
            { where: { id: userId } } // Use the user ID from the parameters
        );

        if (updated) {
            const updatedUser = await User.findByPk(userId);
            return res.status(200).json({ message: 'User updated successfully!', User: updatedUser });
        }
        throw new Error('User not found');
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: 'Error updating user.' });
    }
};

export default updateUser;
