
const { program } = require('commander');
const chalk = require('chalk'); 


const greet = require('./commands/greet');
const fetchData = require('./commands/fetch');
const readFileContent = require('./commands/read');


program
    .name('ninja-utility')
    .description('Un utilitaire en ligne de commande pour diverses tâches ninja.')
    .version('1.0.0'); 


program
    .command('greet [name]') 
    .description('Affiche un message de bienvenue coloré.')
    .action((name) => { 
        greet(name);
    });


program
    .command('fetch <url>')
    .description('Récupère et affiche les données d\'une URL spécifiée.')
    .action((url) => {
        fetchData(url);
    });


program
    .command('read <filePath>') 
    .description('Lit et affiche le contenu d\'un fichier spécifié.')
    .action((filePath) => {
        readFileContent(filePath);
    });


program.on('command:*', function (operands) {
    console.error(chalk.red(`Erreur: commande inconnue '${operands[0]}'\n`));
    program.outputHelp();
    process.exit(1); 
});



program.parse(process.argv);


if (!process.argv.slice(2).length) {
    program.outputHelp();
}