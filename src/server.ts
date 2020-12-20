import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

import authRoutes from './routes/auth';

import trim from './middleware/trim';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(trim);
app.use(cookieParser());

app.get('/', (_, res) => res.send('Hello there!'));
app.use('/api/auth', authRoutes);

app.listen(process.env.PORT, async () => {
  console.log('Server running at http://localhost:5005');

  try {
    await createConnection();
    console.log('Database connected!');
  } catch (error) {
    console.log(error);
  }
});
