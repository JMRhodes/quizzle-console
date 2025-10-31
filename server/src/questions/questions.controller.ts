import express from 'express';
import { db } from '../db/index';
import { z } from 'zod';
import {
	ReasonPhrases,
	StatusCodes,
	getReasonPhrase,
} from 'http-status-codes';

import {
  questions as questionsTable,
  insertQuestionsSchema,
} from '../db/schema/questions';

const questions = express.Router();

questions.get('/', async (req, res) => {
  const allQuestions = await db.select().from(questionsTable);

  res.json({ message: 'Questions endpoint', data: allQuestions });
});

questions.post('/', async (req, res) => {
  try {
    const validatedData = insertQuestionsSchema.parse(req.body);

    await db.insert(questionsTable).values(validatedData);

    res.status(StatusCodes.CREATED).send(`Question ${ReasonPhrases.CREATED} successfully.`);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: ReasonPhrases.BAD_REQUEST,
        errors: JSON.parse(error.message),
      });
    }

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
});

export default questions;
