const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

const emojis = [
  { emoji: '😀', name: 'Smile', category: 'faces' },
  { emoji: '🐶', name: 'Dog', category: 'animals' },
  { emoji: '🌮', name: 'Taco', category: 'food' },
  { emoji: '🍕', name: 'Pizza', category: 'food' },
  { emoji: '🚗', name: 'Car', category: 'vehicles' },
  { emoji: '⚽', name: 'Soccer', category: 'sports' },
  { emoji: '🐱', name: 'Cat', category: 'animals' },
  { emoji: '🚀', name: 'Rocket', category: 'vehicles' },
  { emoji: '🎸', name: 'Guitar', category: 'music' },
  { emoji: '🦄', name: 'Unicorn', category: 'animals' },
  { emoji: '🎮', name: 'Game Controller', category: 'objects' },
  { emoji: '🏆', name: 'Trophy', category: 'objects' },
  { emoji: '🎨', name: 'Artist Palette', category: 'objects' },
  { emoji: '🎭', name: 'Performing Arts', category: 'objects' },
  { emoji: '🎪', name: 'Circus Tent', category: 'objects' },
  { emoji: '🎯', name: 'Bullseye', category: 'objects' },
  { emoji: '🎲', name: 'Die', category: 'objects' },
  { emoji: '🎳', name: 'Bowling', category: 'sports' },
  { emoji: '🎸', name: 'Guitar', category: 'music' },
  { emoji: '🎹', name: 'Musical Keyboard', category: 'music' },
  { emoji: '🎺', name: 'Trumpet', category: 'music' },
  { emoji: '🎻', name: 'Violin', category: 'music' },
  { emoji: '🎼', name: 'Musical Score', category: 'music' },
  { emoji: '🎧', name: 'Headphone', category: 'music' },
  { emoji: '🎤', name: 'Microphone', category: 'music' },
  { emoji: '🎬', name: 'Clapper Board', category: 'objects' },
  { emoji: '🎥', name: 'Movie Camera', category: 'objects' },
  { emoji: '🎭', name: 'Performing Arts', category: 'objects' },
  { emoji: '🎪', name: 'Circus Tent', category: 'objects' },
  { emoji: '🎨', name: 'Artist Palette', category: 'objects' }
];

const difficultySettings = {
  easy: { timeLimit: 15, optionsCount: 4 },
  medium: { timeLimit: 10, optionsCount: 6 },
  hard: { timeLimit: 7, optionsCount: 8 }
};

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Route explicite pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/emoji', (req, res) => {
  const difficulty = req.query.difficulty || 'easy';
  const settings = difficultySettings[difficulty];
  
  const correctIndex = Math.floor(Math.random() * emojis.length);
  const correctEmoji = emojis[correctIndex];
  let options = [correctEmoji.name];
  
  // Get other emojis from the same category for hints
  const sameCategoryEmojis = emojis.filter(e => e.category === correctEmoji.category && e.name !== correctEmoji.name);
  
  while (options.length < settings.optionsCount) {
    const random = emojis[Math.floor(Math.random() * emojis.length)].name;
    if (!options.includes(random)) options.push(random);
  }
  
  options = options.sort(() => Math.random() - 0.5);
  
  res.json({
    emoji: correctEmoji.emoji,
    options,
    correctAnswer: correctEmoji.name,
    category: correctEmoji.category,
    timeLimit: settings.timeLimit
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
