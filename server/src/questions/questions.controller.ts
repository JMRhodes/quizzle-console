import express from 'express';

const questions = express.Router();

questions.get('/', (req, res) => {
  res.json({ message: 'Questions endpoint' });
});

export default questions;
