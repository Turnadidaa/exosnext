
const chalk = require('chalk');

function greet(name) {
  const message = chalk.green.bold(`Bonjour, ${name || 'Ninja'} ! Bienvenue dans votre utilitaire.`);
  console.log(message);
}

module.exports = greet;