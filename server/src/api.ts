import express from 'express';
import type { Express, Request, Response } from 'express';
import { errorHandler } from './middlewares/errorHandler';
import pino from 'pino-http';
import { SuccessResponse } from './types/responses';

import questions from './questions/questions.controller';

const api: Express = express();
const apiRouter = express.Router();

const apiVersion: string = 'v1';

const VersionData: {
  version: string;
  releaseDate: string;
} = {
  version: apiVersion,
  releaseDate: '2025-10-31',
};

api.use(express.json()).use(
  pino({
    transport: {
      target: 'pino-pretty',
    },
  }),
);

// setup API routes for versioning
apiRouter
  .get('/', (req: Request, res: Response) => {
    res.json({
      message: 'Welcome to the API',
      data: VersionData,
    } satisfies SuccessResponse<typeof VersionData>);
  })
  .use('/questions', questions);

// Mount the versioned API router
api.use(`/api/${apiVersion}`, apiRouter);
api.use(errorHandler);

export default api;
