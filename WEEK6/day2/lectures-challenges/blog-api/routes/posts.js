const express = require('express');
const router = express.Router();

// Base de données temporaire (en mémoire)
let posts = [];
let nextId = 1;

// GET /posts – Récupérer tous les posts
router.get('/', (req, res) => {
  res.json(posts);
});

// GET /posts/:id – Récupérer un post spécifique
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }

  res.json(post);
});

// POST /posts – Créer un nouveau post
router.post('/', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  const newPost = {
    id: nextId++,
    title,
    content,
    timestamp: new Date().toISOString()
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /posts/:id – Mettre à jour un post
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }

  if (!title && !content) {
    return res.status(400).json({ error: 'At least one field (title or content) is required' });
  }

  if (title) post.title = title;
  if (content) post.content = content;
  post.timestamp = new Date().toISOString();

  res.json(post);
});

// DELETE /posts/:id – Supprimer un post
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Post not found' });
  }

  const deleted = posts.splice(index, 1);
  res.json(deleted[0]);
});

module.exports = router;
