import express from 'express';
import registerUser from '../controllers/userController';

const router = express.Router();

console.log('2');
router.post('/register', registerUser);

export default router;

