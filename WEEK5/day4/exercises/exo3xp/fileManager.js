
const fs = require('fs');

// Lire le contenu d'un fichier
function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

// Écrire dans un fichier
function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
}

// Export des fonctions
module.exports = {
  readFile,
  writeFile
};
