const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./server/routes/userRoutes');

dotenv.config();

const app = express();

app.use(express.json());

// 🔥 Servir les fichiers HTML du dossier public
app.use(express.static('public'));

app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
