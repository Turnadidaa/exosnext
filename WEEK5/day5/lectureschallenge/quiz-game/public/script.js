let questions = [];
let currentQuestionIndex = 0;
let score = 0;

const questionBox = document.getElementById('question-box');
const choicesBox = document.getElementById('choices-box');
const feedback = document.getElementById('feedback');
const scoreBox = document.getElementById('score');
const submitBtn = document.getElementById('submit-btn');

let selectedAnswer = null;

// Charger les questions
fetch('/api/questions')
  .then(res => res.json())
  .then(data => {
    questions = data;
    showQuestion();
  });

function showQuestion() {
  const q = questions[currentQuestionIndex];
  questionBox.textContent = q.question;
  choicesBox.innerHTML = '';
  feedback.textContent = '';
  selectedAnswer = null;

  q.choices.forEach((choice, index) => {
    const label = document.createElement('label');
    label.innerHTML = `
      <input type="radio" name="choice" value="${index}"> ${choice}
    `;
    choicesBox.appendChild(label);
    choicesBox.appendChild(document.createElement('br'));
  });
}

submitBtn.addEventListener('click', () => {
  const selected = document.querySelector('input[name="choice"]:checked');
  if (!selected) {
    feedback.textContent = "Please select an answer.";
    return;
  }

  selectedAnswer = parseInt(selected.value);
  const correct = questions[currentQuestionIndex].correct;

  if (selectedAnswer === correct) {
    feedback.textContent = "Correct!";
    score++;
  } else {
    feedback.textContent = `Wrong! The correct answer was: ${questions[currentQuestionIndex].choices[correct]}`;
  }

  currentQuestionIndex++;
  scoreBox.textContent = `Score: ${score}/${questions.length}`;

  if (currentQuestionIndex < questions.length) {
    setTimeout(showQuestion, 1500);
  } else {
    setTimeout(() => {
      questionBox.textContent = "Quiz finished!";
      choicesBox.innerHTML = "";
      submitBtn.disabled = true;
      feedback.textContent = "";
    }, 1500);
  }
});
