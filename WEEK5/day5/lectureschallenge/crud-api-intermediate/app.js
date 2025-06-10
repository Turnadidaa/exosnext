const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

// 🔹 1. GET tous les posts
app.get('/api/posts', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des posts' });
  }
});

// 🔹 2. GET un post par ID
app.get('/api/posts/:id', async (req, res) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du post' });
  }
});

// 🔹 3. POST créer un nouveau post
app.post('/api/posts', async (req, res) => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du post' });
  }
});

// 🔹 4. PUT mettre à jour un post
app.put('/api/posts/:id', async (req, res) => {
  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du post' });
  }
});

// 🔹 5. DELETE supprimer un post
app.delete('/api/posts/:id', async (req, res) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
    res.json({ message: 'Post supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du post' });
  }
});

// Route racine pour test
app.get('/', (req, res) => {
  res.send('Bienvenue sur l’API CRUD intermédiaire');
});

// Lancement du serveur
app.listen(5000, () => {
  console.log('✅ Serveur lancé sur http://localhost:5000');
});
