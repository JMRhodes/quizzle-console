import {
  questions as questionsTable,
  insertQuestionsSchema,
} from '../db/schema/questions';
import { db } from '../db/index';
import { z } from 'zod';

export const questionsService = {
  async getAllQuestions() {
    return await db.select().from(questionsTable);
  },

  async addQuestion(questionData: z.infer<typeof insertQuestionsSchema>) {
    return await db.insert(questionsTable).values(questionData);
  },
};
