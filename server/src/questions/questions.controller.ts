import express from 'express';
import { db } from '../db/index';
import {z } from 'zod';

import { questions as questionsTable, insertQuestionsSchema } from '../db/schema/questions';

const questions = express.Router();

questions.get('/', async (req, res) => {
  const allQuestions = await db.select().from(questionsTable);

  res.json({ message: 'Questions endpoint', data: allQuestions });
});

questions.post('/', async (req, res) => {
  try {
    const validatedData = insertQuestionsSchema.parse(req.body);
    
    await db.insert(questionsTable).values(validatedData);

    res.status(201).send('Question created successfully');
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        message: 'Validation Error',
        errors: JSON.parse(error.message) 
      });
    }

    res.status(500).send('Internal Server Error');
  }
});

export default questions;
