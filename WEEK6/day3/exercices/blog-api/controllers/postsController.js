const db = require('./config/db');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await db('posts').select();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await db('posts').where({ id: req.params.id }).first();
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const [newPost] = await db('posts').insert({ title, content }).returning('*');
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updatePost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const updated = await db('posts').where({ id: req.params.id }).update({ title, content }).returning('*');
    if (!updated.length) return res.status(404).json({ error: 'Post not found' });
    res.json(updated[0]);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const deleted = await db('posts').where({ id: req.params.id }).del();
    if (!deleted) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
