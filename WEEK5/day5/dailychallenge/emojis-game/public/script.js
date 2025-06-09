let score = 0;
let currentDifficulty = 'easy';
let timer;
let timeLeft;
let hintUsed = false;
let speedMultiplier = 1;
let baseTimeLimit;
let consecutiveCorrect = 0;

document.addEventListener('DOMContentLoaded', () => {

  // Initialize difficulty buttons
  document.querySelectorAll('.difficulty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDifficulty = btn.dataset.difficulty;
      resetGame();
    });
  });

  function resetGame() {
    score = 0;
    speedMultiplier = 1;
    consecutiveCorrect = 0;
    document.getElementById('score').textContent = score;
    const feedback = document.getElementById('feedback');
    feedback.classList.remove('show-feedback');
    feedback.textContent = '';
    loadEmoji();
  }

  function updateSpeedMultiplier() {
    const oldMultiplier = speedMultiplier;
    
    // Speed increases based on both score and consecutive correct answers
    if (score >= 50) {
      speedMultiplier = 5;
    } else if (score >= 40) {
      speedMultiplier = 4;
    } else if (score >= 30) {
      speedMultiplier = 3.5;
    } else if (score >= 20) {
      speedMultiplier = 3;
    } else if (score >= 15) {
      speedMultiplier = 2.5;
    } else if (score >= 10) {
      speedMultiplier = 2;
    } else if (score >= 5) {
      speedMultiplier = 1.5;
    } else {
      speedMultiplier = 1;
    }
    
    // Bonus speed for consecutive correct answers
    if (consecutiveCorrect >= 5) {
      speedMultiplier += 0.5;
    }
    
    // Update timer with new speed
    if (timeLeft > 0) {
      const remainingTime = Math.ceil(timeLeft / speedMultiplier);
      timeLeft = remainingTime;
      document.querySelector('.timer').textContent = formatTime(timeLeft);
    }
    
    return oldMultiplier !== speedMultiplier;
  }

  function startTimer(seconds) {
    clearInterval(timer);
    baseTimeLimit = seconds;
    timeLeft = Math.ceil(seconds / speedMultiplier);
    document.querySelector('.timer').textContent = formatTime(timeLeft);
    
    timer = setInterval(() => {
      timeLeft--;
      document.querySelector('.timer').textContent = formatTime(timeLeft);
      
      if (timeLeft <= 0) {
        clearInterval(timer);
        const feedback = document.getElementById('feedback');
        feedback.textContent = `⏰ Time's up! The answer was "${currentCorrectAnswer}".`;
        feedback.classList.add('show-feedback');
        consecutiveCorrect = 0; // Reset consecutive correct on timeout
        setTimeout(() => {
          feedback.textContent = '';
          feedback.classList.remove('show-feedback');
          loadEmoji();
        }, 2000 / speedMultiplier); // Adjusted delay
      }
    }, 1000 / speedMultiplier);
  }

  // Add a helper function to format the time
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }

  let currentCorrectAnswer;
  let currentCategory;

  function loadEmoji() {
    hintUsed = false;
    document.getElementById('hint-btn').disabled = false;
    const feedback = document.getElementById('feedback');
    feedback.classList.remove('show-feedback');
    feedback.textContent = '';
    
    fetch(`/api/emoji?difficulty=${currentDifficulty}`)
      .then(res => res.json())
      .then(data => {
        document.getElementById('emoji').textContent = data.emoji;
        const optionsDiv = document.getElementById('options');
        optionsDiv.innerHTML = '';
        
        currentCorrectAnswer = data.correctAnswer;
        currentCategory = data.category;
        
        data.options.forEach(option => {
          const btn = document.createElement('button');
          btn.textContent = option;
          btn.onclick = () => checkAnswer(option, data.correctAnswer);
          optionsDiv.appendChild(btn);
        });
        
        startTimer(data.timeLimit);
      });
  }

  function checkAnswer(selected, correct) {
    clearInterval(timer);
    const feedback = document.getElementById('feedback');
    
    if (selected === correct) {
      score++;
      consecutiveCorrect++;
      const pointsEarned = Math.round(speedMultiplier);
      feedback.textContent = `✅ Correct! +${pointsEarned} points`;
      feedback.classList.add('show-feedback');
      document.getElementById('score').textContent = score;
      
      // Check if we need to update speed
      const speedChanged = updateSpeedMultiplier();
      
      // If speed changed, show a message
      if (speedChanged) {
        setTimeout(() => {
          feedback.textContent = `⚡ Speed increased! (x${speedMultiplier.toFixed(1)})`;
          setTimeout(() => {
            feedback.textContent = '';
            feedback.classList.remove('show-feedback');
            loadEmoji();
          }, 2000 / speedMultiplier); // Adjusted delay
        }, 1000 / speedMultiplier); // Adjusted delay
      } else {
        setTimeout(() => {
          feedback.textContent = '';
          feedback.classList.remove('show-feedback');
          loadEmoji();
        }, 2000 / speedMultiplier); // Adjusted delay
      }
    } else {
      feedback.textContent = `❌ Incorrect! It was "${correct}".`;
      feedback.classList.add('show-feedback');
      consecutiveCorrect = 0; // Reset consecutive correct on wrong answer
      setTimeout(() => {
        feedback.textContent = '';
        feedback.classList.remove('show-feedback');
        loadEmoji();
      }, 2000 / speedMultiplier); // Adjusted delay
    }
  }

  document.getElementById('hint-btn').addEventListener('click', () => {
    if (!hintUsed) {
      const feedback = document.getElementById('feedback');
      feedback.textContent = `💡 Hint: This emoji is in the "${currentCategory}" category`;
      feedback.classList.add('show-feedback');
      document.getElementById('hint-btn').disabled = true;
      hintUsed = true;
      // Add a timeout to hide the hint after a few seconds
      setTimeout(() => {
        feedback.textContent = '';
        feedback.classList.remove('show-feedback');
      }, 3000); // Hide hint after 3 seconds
    }
  });

  loadEmoji();

}); // End of DOMContentLoaded
