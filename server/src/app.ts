import express from 'express';
import type { Express, Request, Response } from 'express';
import { errorHandler } from './middlewares/errorHandler';
import pino from 'pino-http'

const app: Express = express();

app
  .use(express.json())
  .use(pino({
    transport: {
      target: 'pino-pretty'
    },
  }));

app.get('/', (req: Request, res: Response) => {
  // throw new Error('Test error');
  res.json({
    message: 'Welcome to the API',
  });
});

app.use(errorHandler);

export default app;
