import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRouter from './routers/auth.js';
import { env } from './utils/env.js';
import contactRouter from './routers/contacts.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

const setupServer = () => {
  dotenv.config();
  const app = express();
  const PORT = env('PORT', '3000');

  const logger = pino({
    transport: {
      target: 'pino-pretty',
    },
  });

  // app.use(logger);
  app.use(cors());
  app.use(cookieParser());
  app.use(express.json());

<<<<<<< HEAD
<<<<<<< Updated upstream
  app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>');
  });
=======
  app.use('/auth', authRouter);
  app.use('/contacts', contactRouter);
  app.use(notFoundHandler);
  app.use(errorHandler);
>>>>>>> Stashed changes
=======
  app.use('/contacts', contactRouter);
  app.use(notFoundHandler);
  app.use(errorHandler);
>>>>>>> c4024ca720ec32d245e7faf6f80fb2eab6466de5

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

export default setupServer;
