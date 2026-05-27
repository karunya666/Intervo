import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { ENV } from '../lib/env.js';

dotenv.config();

const __dirname = path.resolve();

const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({ msg: 'API is up and running' });
});

if (ENV.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')))

  app.get('/{*any}', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
  });
}

app.listen(ENV.PORT, () => console.log(`Server is running on port ${ENV.PORT}`));