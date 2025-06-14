
const readline = require('readline'); 
const chalk = require('chalk');     
const getWeather = require('./weather'); 

console.log("Valeur de chalk dans dashboard.js :", chalk);

const rl = readline.createInterface({
    input: process.stdin,  
    output: process.stdout 
});

function startDashboard() {
    console.log(chalk.bold.yellow('Bienvenue sur votre tableau de bord météo !'));
    console.log(chalk.yellow('Entrez "exit" à tout moment pour quitter.'));

   
    askForCity();
}

function askForCity() {
    rl.question(chalk.cyan('\nPour quelle ville souhaitez-vous la météo ? ') + chalk.white('(Ex: Paris, London, New York) '), async (city) => {
    
        const trimmedCity = city.trim();

        if (trimmedCity.toLowerCase() === 'exit') {
            console.log(chalk.yellow('Merci d\'avoir utilisé le tableau de bord météo. Au revoir !'));
            rl.close();
            return;
        }

        if (trimmedCity) {
        } else {
            console.log(chalk.red('Veuillez entrer un nom de ville valide.'));
        }

        
        askForCity();
    });
}


module.exports = startDashboard;