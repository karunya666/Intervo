import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import { ENV } from '../lib/env.js';
import { connectDB } from '../lib/db.js';
import { serve } from 'inngest/express';
import { inngest, functions } from '../lib/inngest.js';
import { clerkMiddleware } from '@clerk/express';
import chatRoutes from '../routes/chatRoutes.js';
import sessionRoutes from '../routes/sessionRoute.js';
import executeRoutes from '../routes/execute.js';

dotenv.config();

const __dirname = path.resolve();

const app = express();

//middleware
app.use(express.json());
//credentials: true allows cookies to be sent in cross-origin requests
// app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
const allowedOrigins = [
  ENV.CLIENT_URL,
  "http://localhost:5173",
];

app.use(cors({ 
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true 
}));
app.use(clerkMiddleware()); // this adds auth field to request object: req.auth()

app.use('/api/inngest', serve({ client: inngest, functions }));
app.use('/api', executeRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/sessions', sessionRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ msg: 'API is up and running' });
});



// if (ENV.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../frontend/dist')))

//   app.get('/{*any}', (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
//   });
// }

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