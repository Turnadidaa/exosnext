const express = require('express');
const { fetchPosts } = require('./data/dataservice');
const app = express();
const port = 5000;

app.get('/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('Posts récupérés et envoyés au client');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur lors de la récupération des posts' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
