const fs = require('fs');
const util = require('util');
const chalk = require('chalk');

// Convertit fs.readFile en une version basée sur les Promises
const readFilePromise = util.promisify(fs.readFile);

async function readFileContent(filePath) {
  if (!filePath) {
    console.error(chalk.red('Erreur: Veuillez fournir un chemin de fichier pour la commande read.'));
    return;
  }
  try {
    // Utilise la version Promise de readFile
    const content = await readFilePromise(filePath, 'utf8');
    console.log(chalk.yellow.bold(`Contenu de '${filePath}' :`));
    console.log(content);
  } catch (error) {
    console.error(chalk.red(`Erreur lors de la lecture du fichier '${filePath}' :`), error.message);
  }
}

module.exports = readFileContent;