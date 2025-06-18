const express = require('express');
const app = express();
const path = require('path');
const questions = require('./questions');

const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// API pour obtenir les questions
app.get('/api/questions', (req, res) => {
  res.json(questions);
});

app.listen(PORT, () => {
  console.log(`Quiz app listening at http://localhost:${PORT}`);
});
