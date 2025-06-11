const express = require('express');
const session = require('express-session');
const quizRouter = require('./routes/quiz');

const app = express();
const PORT = 4000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
  secret: 'trivia_secret_key',
  resave: false,
  saveUninitialized: true
}));

// Routes
app.use('/quiz', quizRouter);

app.get('/', (req, res) => {
  res.redirect('/quiz');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
