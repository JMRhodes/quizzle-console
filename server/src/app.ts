import express from 'express';
import type { Express, Request, Response } from 'express';
import { errorHandler } from './middlewares/errorHandler';

const app: Express = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    // throw new Error('Test error');
    res.json({
        message: 'Welcome to the API',
    });
});

// middlewares
app.use(errorHandler);

export default app;