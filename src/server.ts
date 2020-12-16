import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => res.send('Hello there!'));

app.listen(5005, async () => {
  console.log('Server running at http://localhost:5005');
});
