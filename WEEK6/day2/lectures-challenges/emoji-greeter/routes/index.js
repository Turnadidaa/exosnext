const express = require('express');
const router = express.Router();

// Liste des emojis disponibles
const emojis = ["😀", "🎉", "🌟", "🎈", "👋"];

// GET / : Affiche le formulaire
router.get('/', (req, res) => {
  res.render('form', { emojis, error: null });
});

// POST /greet : Traite le formulaire
router.post('/greet', (req, res) => {
  const { name, emoji } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).render('form', {
      emojis,
      error: "Le nom est requis !"
    });
  }

  res.render('greet', { name: name.trim(), emoji });
});

module.exports = router;
