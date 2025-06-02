let board = Array(GAME_CONSTANTS.BOARD_SIZE * GAME_CONSTANTS.BOARD_SIZE).fill(GAME_CONSTANTS.EMPTY_CELL);
let currentPlayer = GAME_CONSTANTS.PLAYER_X;
let gameActive = true;
let isAgainstAI = false;
let playerX = GAME_CONSTANTS.PLAYER_X;
let playerO = GAME_CONSTANTS.PLAYER_O;
let startTime;
let timerInterval;

const statusDisplay = document.getElementById("status");
const nameXDisplay = document.getElementById("nameX");
const nameODisplay = document.getElementById("nameO");

function startGame() {
  const p1 = document.getElementById("player1").value || "Combattant X";
  const p2 = document.getElementById("player2").value || "Combattant O";

  playerX = p1;
  playerO = p2;
  isAgainstAI = (p2.toLowerCase() === "ia");

  nameXDisplay.textContent = p1;
  nameODisplay.textContent = p2;

  const introScreen = document.querySelector(".intro-screen");
  const gameContainer = document.querySelector(".game-container");
  
  animations.fadeOut(introScreen, GAME_CONSTANTS.ANIMATIONS.FADE);
  setTimeout(() => {
    introScreen.classList.add("hidden");
    gameContainer.classList.remove("hidden");
    animations.fadeIn(gameContainer, GAME_CONSTANTS.ANIMATIONS.FADE);
  }, GAME_CONSTANTS.ANIMATIONS.FADE);

  playSound('start');
  startTimer();
  updateStatus();
}

function handleCellClick(e) {
  const index = e.target.getAttribute("data-index");
  if (board[index] !== GAME_CONSTANTS.EMPTY_CELL || !gameActive) return;

  playSound('click');
  makeMove(index, currentPlayer);
  if (checkGameOver()) return;

  currentPlayer = currentPlayer === GAME_CONSTANTS.PLAYER_X ? GAME_CONSTANTS.PLAYER_O : GAME_CONSTANTS.PLAYER_X;
  updateStatus();

  if (isAgainstAI && currentPlayer === GAME_CONSTANTS.PLAYER_O) {
    setTimeout(() => {
      const empty = board.map((v, i) => v === GAME_CONSTANTS.EMPTY_CELL ? i : null).filter(v => v !== null);
      const randomIndex = empty[Math.floor(Math.random() * empty.length)];
      makeMove(randomIndex, GAME_CONSTANTS.PLAYER_O);
      if (!checkGameOver()) {
        currentPlayer = GAME_CONSTANTS.PLAYER_X;
        updateStatus();
      }
    }, 500);
  }
}

function makeMove(index, player) {
  board[index] = player;
  const cell = document.querySelectorAll(".cell")[index];
  cell.textContent = player;
  cell.classList.add(player.toLowerCase());
  animations.victory(cell);
}

function checkGameOver() {
  for (let combo of GAME_CONSTANTS.WINNING_COMBINATIONS) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      const winner = getPlayerName(board[a]);
      statusDisplay.textContent = `${winner} ${GAME_CONSTANTS.MESSAGES.PLAYER_WINS}`;
      gameActive = false;
      stopTimer();
      playSound('win');
      animations.victory(statusDisplay);
      return true;
    }
  }

  if (!board.includes(GAME_CONSTANTS.EMPTY_CELL)) {
    statusDisplay.textContent = GAME_CONSTANTS.MESSAGES.GAME_DRAW;
    gameActive = false;
    stopTimer();
    playSound('draw');
    return true;
  }

  return false;
}

function getPlayerName(symbol) {
  return symbol === GAME_CONSTANTS.PLAYER_X ? playerX : playerO;
}

function updateStatus() {
  const name = getPlayerName(currentPlayer);
  statusDisplay.textContent = `${GAME_CONSTANTS.MESSAGES.PLAYER_TURN} ${name}`;
}

function restartGame() {
  board = Array(GAME_CONSTANTS.BOARD_SIZE * GAME_CONSTANTS.BOARD_SIZE).fill(GAME_CONSTANTS.EMPTY_CELL);
  currentPlayer = GAME_CONSTANTS.PLAYER_X;
  gameActive = true;
  document.querySelectorAll(".cell").forEach(cell => {
    cell.textContent = GAME_CONSTANTS.EMPTY_CELL;
    cell.classList.remove("x", "o");
  });
  updateStatus();
  stopTimer();
  startTimer();
  playSound('start');
}

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const min = String(Math.floor(elapsed / 60)).padStart(2, "0");
    const sec = String(elapsed % 60).padStart(2, "0");
    document.getElementById("timer").textContent = `${min}:${sec}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function returnToMenu() {
  const gameContainer = document.querySelector(".game-container");
  const introScreen = document.querySelector(".intro-screen");
  
  animations.fadeOut(gameContainer, GAME_CONSTANTS.ANIMATIONS.FADE);
  setTimeout(() => {
    gameContainer.classList.add("hidden");
    introScreen.classList.remove("hidden");
    animations.fadeIn(introScreen, GAME_CONSTANTS.ANIMATIONS.FADE);
  }, GAME_CONSTANTS.ANIMATIONS.FADE);

  stopTimer();
  board = Array(GAME_CONSTANTS.BOARD_SIZE * GAME_CONSTANTS.BOARD_SIZE).fill(GAME_CONSTANTS.EMPTY_CELL);
  currentPlayer = GAME_CONSTANTS.PLAYER_X;
  gameActive = true;
  document.querySelectorAll(".cell").forEach(cell => {
    cell.textContent = GAME_CONSTANTS.EMPTY_CELL;
    cell.classList.remove("x", "o");
  });
}

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
}

document.querySelectorAll(".cell").forEach(cell => {
  cell.addEventListener("click", handleCellClick);
});
