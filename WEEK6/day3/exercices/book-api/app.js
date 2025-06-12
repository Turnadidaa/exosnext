const express = require("express");
const path = require("path");
const app = express();
const bookRoutes = require("./server/routes/bookRoutes");

app.use(express.json()); // pour lire les données JSON
app.use(express.static(path.join(__dirname, "public"))); // pour servir index.html

// Préfixe API
app.use("/api", bookRoutes);

// Accueil HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
