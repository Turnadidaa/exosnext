const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true })); // Pour parser les données du formulaire
app.use(express.static(path.join(__dirname, 'public'))); // Pour les fichiers CSS

app.use('/', router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
