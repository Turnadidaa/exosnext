import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 5000;

// Middleware pour lire le JSON dans le body
app.use(express.json());

// "Base de données" temporaire en mémoire (array)
const users = [];

// Clé secrète pour JWT (en vrai, dans un fichier .env)
const JWT_SECRET = 'monsecrettrèssecurisé';

// Route Inscription
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  // Validation simple
  if (!username || !password) {
    return res.status(400).json({ message: 'Username et password requis' });
  }

  // Vérifier si utilisateur existe déjà
  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'Utilisateur déjà enregistré' });
  }

  // Hasher le mot de passe
  const hashedPassword = await bcrypt.hash(password, 10);

  // Sauvegarder utilisateur
  users.push({ username, password: hashedPassword });
  res.status(201).json({ message: 'Utilisateur créé avec succès' });
});

// Route Connexion
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  // Vérifier utilisateur
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(400).json({ message: 'Utilisateur non trouvé' });
  }

  // Vérifier mot de passe
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Mot de passe incorrect' });
  }

  // Générer token JWT
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });

  res.json({ message: 'Connexion réussie', token });
});

// Middleware pour vérifier le token JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer TOKEN"

  if (!token) return res.status(401).json({ message: 'Token manquant' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token invalide' });
    req.user = user;
    next();
  });
}

// Route Profil (protégée)
app.get('/api/profile', authenticateToken, (req, res) => {
  const user = users.find(u => u.username === req.user.username);
  if (!user) {
    return res.status(404).json({ message: 'Utilisateur non trouvé' });
  }
  res.json({ username: user.username });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
