const chalk = require('chalk');

function showColorfulMessage() {
  console.log(chalk.blue.bold('🌈 This is a colorful message using Chalk!'));
}

module.exports = { showColorfulMessage };
