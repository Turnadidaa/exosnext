const bcrypt = require('bcrypt');
const pool = require('../config/db');

const register = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username et password sont obligatoires' });
  }

  try {
    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Enregistrer dans la table users (exemple simple)
    await pool.query(
      'INSERT INTO users (username) VALUES ($1)',
      [username]
    );

    // Enregistrer dans la table hashpwd
    await pool.query(
      'INSERT INTO hashpwd (username, password) VALUES ($1, $2)',
      [username, hashedPassword]
    );

    res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
  } catch (err) {
    console.error('Erreur register:', err.message);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username et password sont obligatoires' });
  }

  try {
    const query = 'SELECT password FROM hashpwd WHERE username = $1';
    const result = await pool.query(query, [username]);

    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Utilisateur non trouvé' });
    }

    const hashedPassword = result.rows[0].password;

    const match = await bcrypt.compare(password, hashedPassword);

    if (!match) {
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    res.status(200).json({ message: 'Connexion réussie' });
  } catch (err) {
    console.error('Erreur login:', err.message);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

module.exports = {
  register,
  login,
};
