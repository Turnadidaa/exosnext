const fs = require('fs');
const path = require('path');

function displayFileInfo() {
  // Création du chemin vers example.txt dans data
  const filePath = path.join(__dirname, 'data', 'example.txt');

  // Vérification si le fichier existe
  const exists = fs.existsSync(filePath);
  console.log(`File exists: ${exists}`);

  if (exists) {
    // Récupération des infos sur le fichier
    const stats = fs.statSync(filePath);
    console.log(`File size: ${stats.size} bytes`);
    console.log(`Created at: ${stats.birthtime}`);
  } else {
    console.log('The file does not exist.');
  }
}

// Export de la fonction pour pouvoir l'utiliser dans app.js
module.exports = { displayFileInfo };
