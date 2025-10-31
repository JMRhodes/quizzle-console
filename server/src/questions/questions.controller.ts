import express from 'express';
import { db } from '../db/index';

import { questions as questionsTable } from '../db/schema/questions';

const questions = express.Router();

questions.get('/', async (req, res) => {
  const allQuestions = await db.select().from(questionsTable);

  res.json({ message: 'Questions endpoint', data: allQuestions });
});

export default questions;
