const express = require('express');
const router = express.Router();

// Exemple de données temporaire (en attendant la base de données)
let posts = [
  { id: 1, title: 'First post', content: 'Hello world!' },
];

// GET /posts - récupérer tous les posts
router.get('/', (req, res) => {
  res.json(posts);
});

// GET /posts/:id - récupérer un post par ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

// POST /posts - créer un nouveau post
router.post('/', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /posts/:id - mettre à jour un post existant
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id === id);
  if (postIndex === -1) return res.status(404).json({ error: 'Post not found' });

  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }
  posts[postIndex] = { id, title, content };
  res.json(posts[postIndex]);
});

// DELETE /posts/:id - supprimer un post
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id === id);
  if (postIndex === -1) return res.status(404).json({ error: 'Post not found' });
  posts.splice(postIndex, 1);
  res.status(204).send();
});

module.exports = router;
