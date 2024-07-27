import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRouter from './routers/auth.js';
import { env } from './utils/env.js';
import { getContacts, getContactById } from './services/contacts.js';

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
  app.use(cookieParser());
  app.use(express.json());

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

  app.get('/contacts', async (req, res) => {
    const result = await getContacts();
    res.json({
      status: 200,
      message: 'Successfully found contacts!',
      data: result,
    });
  }),
    app.get('/contacts/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const data = await getContactById(id);

        if (!data) {
          return res.status(404).json({
            message: `Contact with id=${id} not found`,
          });
        }
        res.json({
          status: 200,
          data,
          message: `Contact with id=${id} find success`,
        });
      } catch (error) {
        if (error.message.includes('Cast to ObjectId failed')) {
          error.status = 404;
        }
        const { status = 500 } = error;
        res.status(status).json({
          message: error.message,
        });
      }
    });

  app.use((req, res) => {
    res.status(404).json({
      message: 'Not found',
    });
  });
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

export default setupServer;
