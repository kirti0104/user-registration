import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user';

console.log('3')
const registerUser = async (req: Request, res: Response) => {
  console.log('Received request:', req.body); // Log the request body
  console.log('4')

  const { firstName, lastName, email, dob, phone, gender, password, confirmPassword, termsAndConditions } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const users = await User.create({
      firstName,
      lastName,
      email,
      dob,
      phone,
      gender,
      password: hashedPassword,
      termsAndConditions,
    });
    
    res.status(201).json({ message: 'User registered successfully', users });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ message: 'Something went wrong kirti', error });
  }
};

export default registerUser;