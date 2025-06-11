const express = require('express');
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

// GET /quiz - start quiz
router.get('/', (req, res) => {
  if (!req.session.score) {
    req.session.score = 0;
    req.session.currentQuestion = 0;
  }

  const index = req.session.currentQuestion;

  if (index >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }

  const question = triviaQuestions[index].question;

  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="/style.css">
        <title>Trivia Quiz</title>
      </head>
      <body>
        <div class="container">
          <h1>Question ${index + 1}</h1>
          <p>${question}</p>
          <form method="POST" action="/quiz">
            <input type="text" name="answer" placeholder="Your answer..." required />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </body>
    </html>
  `);
});

// POST /quiz - submit answer
router.post('/', (req, res) => {
  const userAnswer = req.body.answer.trim().toLowerCase();
  const index = req.session.currentQuestion;
  const correctAnswer = triviaQuestions[index].answer.toLowerCase();

  let feedback = '';

  if (userAnswer === correctAnswer) {
    req.session.score++;
    feedback = "✅ Correct!";
  } else {
    feedback = `❌ Incorrect! The correct answer was "${triviaQuestions[index].answer}".`;
  }

  req.session.currentQuestion++;

  const nextIndex = req.session.currentQuestion;

  if (nextIndex >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }

  const nextQuestion = triviaQuestions[nextIndex].question;

  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="/style.css">
        <title>Trivia Quiz</title>
      </head>
      <body>
        <div class="container">
          <p>${feedback}</p>
          <h1>Question ${nextIndex + 1}</h1>
          <p>${nextQuestion}</p>
          <form method="POST" action="/quiz">
            <input type="text" name="answer" placeholder="Your answer..." required />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </body>
    </html>
  `);
});

// GET /quiz/score - show final score
router.get('/score', (req, res) => {
  const score = req.session.score || 0;
  const total = triviaQuestions.length;

  const result = `
    <html>
      <head>
        <link rel="stylesheet" href="/style.css">
        <title>Trivia Quiz</title>
      </head>
      <body>
        <div class="container">
          <h1>🎉 Quiz Completed!</h1>
          <p>Your score: ${score} / ${total}</p>
          <a href="/quiz">Play Again</a>
        </div>
      </body>
    </html>
  `;

  // Reset session
  req.session.destroy();
  res.send(result);
});

module.exports = router;
``
