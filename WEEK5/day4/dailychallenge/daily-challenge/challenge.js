const { greet } = require('./greeting');
const { showColorfulMessage } = require('./colorful-message');
const { readFileContent } = require('./read-file');

console.log(greet("Nada"));         // Affiche le message de bienvenue
showColorfulMessage();              // Affiche un message coloré
readFileContent();                  // Lit le fichier texte
