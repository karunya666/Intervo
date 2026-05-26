import express from 'express';
import dotenv from 'dotenv';
import { ENV } from './lib/env.js';

dotenv.config();

app.get('/health', (req, res) => {
  res.status(200).json({ msg: 'API is up and running' });
});

const app = express();

app.listen(ENV.PORT, () => console.log(`Server is running on port ${ENV.PORT}`));