


 import express from 'express';
 import dotenv from 'dotenv';
 import sequelize from './config/db';
 import router from './routes/userRoutes';
 import updateRouter from './routes/updateRoutes';
 import cors from 'cors';

 dotenv.config();
 const app = express();
 app.use(express.json());
 
 app.use(cors({
  origin: 'http://localhost:3001',  // Replace with your frontend URL
}));

const PORT = process.env.PORT ||5004;

console.log('1')

app.use('./api/users',updateRouter);
 app.use('/api/users', router);



 sequelize.sync({ force: false }).then(() => {
 app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
 }).catch((err) => {
   console.error('Unable to connect to the database:', err);
 });

 console.log('setup complete');
