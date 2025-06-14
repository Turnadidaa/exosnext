
const axios = require('axios');
const chalk = require('chalk');

const API_KEY = '4457f2c629f21a5725f2e10b603b0cff'; 

async function getWeather(city) {
    if (!city) {
        console.error(chalk.red('Erreur: Veuillez fournir un nom de ville.'));
        return;
    }

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    
    console.log(chalk.gray(`\nRequête à l'URL : ${url}`));

    try {
        const response = await axios.get(url);
        const data = response.data;

       
        const cityName = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const feelsLike = data.main.feels_like;
        const humidity = data.main.humidity;

        console.log(chalk.bold.blue(`\nMétéo pour ${cityName}:`));
        console.log(chalk.green(`  Température: ${temperature}°C`));
        console.log(chalk.green(`  Ressenti: ${feelsLike}°C`));
        console.log(chalk.cyan(`  Description: ${description}`));
        console.log(chalk.magenta(`  Humidité: ${humidity}%`));

    } catch (error) {
        
        console.error(chalk.red(`\nErreur lors de la récupération de la météo pour "${city}" :`));
        if (error.response) {
            if (error.response.status === 404) {
                console.error(chalk.red(`  Ville non trouvée. Veuillez vérifier l'orthographe.`));
            } else if (error.response.status === 401) {
                console.error(chalk.red(`  Clé API invalide ou manquante. Veuillez vérifier votre clé OpenWeatherMap.`));
            } else {
                console.error(chalk.red(`  Statut: ${error.response.status}, Message: ${error.response.data.message}`));
            }
        } else if (error.request) {
            console.error(chalk.red(`  Pas de réponse du serveur. Vérifiez votre connexion internet.`));
        } else {
            console.error(chalk.red(`  Erreur: ${error.message}`));
        }
    }
}

module.exports = getWeather;