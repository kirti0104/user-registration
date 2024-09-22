import express from 'express';
import updateUser from '../controllers/updateController';

const updateRouter =express.Router();

console.log('9')
updateRouter.put('/update/:id',updateUser);

export default updateRouter;
