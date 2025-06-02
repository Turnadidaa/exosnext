// Game constants
const GAME_CONSTANTS = {
    // Game board
    BOARD_SIZE: 3,
    EMPTY_CELL: "",
    
    // Players
    PLAYER_X: "X",
    PLAYER_O: "O",
    
    // Game states
    GAME_STATES: {
        PLAYING: "playing",
        WON: "won",
        DRAW: "draw"
    },
    
    // Winning combinations
    WINNING_COMBINATIONS: [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal top-left to bottom-right
        [2, 4, 6]  // Diagonal top-right to bottom-left
    ],
    
    // Messages
    MESSAGES: {
        PLAYER_TURN: "Au tour de",
        PLAYER_WINS: "a gagné !",
        GAME_DRAW: "Match nul !",
        START_GAME: "Entrer dans l'Arène",
        NEW_GAME: "Nouveau Combat"
    },
    
    // Animation durations (in milliseconds)
    ANIMATIONS: {
        FADE: 500,
        VICTORY: 1000,
        CELL_POP: 300
    }
}; 