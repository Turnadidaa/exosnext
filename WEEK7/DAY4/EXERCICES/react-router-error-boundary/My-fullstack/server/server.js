const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors()); // autoriser requêtes cross-origin

// Route GET
app.get('/api/hello', (req, res) => {
  res.send({ message: "Hello From Express" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.use(express.json()); // pour parser le body JSON

// Route POST
app.post('/api/world', (req, res) => {
  console.log(req.body); // affichage côté serveur
  const input = req.body.input;
  res.send({ message: `I received your POST request. This is what you sent me: ${input}` });
});
