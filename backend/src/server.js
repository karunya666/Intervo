import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { ENV } from '../lib/env.js';
import { connectDB } from '../lib/db.js';

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

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log(`Server running on port ${ENV.PORT}`);
    });
  } catch (error) {
    console.error(`Error starting server: ${error.message}`);
    process.exit(1);
  } 
};

startServer();