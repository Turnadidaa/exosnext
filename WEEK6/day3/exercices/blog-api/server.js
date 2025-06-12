const express = require('express');
const app = express();
const PORT = 3007;

// Middleware pour lire le JSON dans le corps des requêtes
app.use(express.json());

// Importer les routes
const postsRoutes = require('./routes/postsRoutes');
app.use('/posts', postsRoutes);

// Route racine
app.get('/', (req, res) => {
  res.send('Welcome to the Blog API!');
});

// Gestion des erreurs pour routes non trouvées
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
