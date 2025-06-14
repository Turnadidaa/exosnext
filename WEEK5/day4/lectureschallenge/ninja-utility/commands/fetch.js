const axios = require ('axios');
const chalk = require ('chalk');
async function fetchData(url){
   if (!url) {
    console.error(chalk.red('Erreur: Veuillez fournir une URL pour la commande fetch.'));
    return;
  }
  try {
    const response = await axios.get(url);
    console.log(chalk.blue.bold('Données récupérées avec succès :'));
    console.log(response.data); // Affiche les données de la réponse
  } catch (error) {
    console.error(chalk.red('Erreur lors de la récupération des données :'), error.message);
    if (error.response) {
      console.error(chalk.red('Statut HTTP:'), error.response.status);
      console.error(chalk.red('Données de l\'erreur:'), error.response.data);
    }
  }
}

module.exports = fetchData;