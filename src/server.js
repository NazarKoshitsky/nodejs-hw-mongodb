import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv';
import env from './utils/env.js';

const setupServer = () => {
  dotenv.config();
  const app = express();
  const PORT = env('PORT', '3000');

  const logger = pino({
    transport: {
      target: 'pino-pretty',
    },
  });

  app.use(logger);
  app.use(cors());
  app.use(express.json());

  app.get(
    '/contacts',
    async(req, (res) => {
      const result = await;
    }),
  );

  app.use((req, res) => {
    res.status(404).json({
      message: 'Not found',
    });
  });
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

export default setupServer;
