
const { format, addDays } = require('date-fns');

function displayFutureDate() {
  const now = new Date(); // Date actuelle
  const futureDate = addDays(now, 5); // Ajout de 5 jours
  const formattedDate = format(futureDate, "eeee, MMMM do yyyy 'at' HH:mm:ss"); // Format personnalisé

  console.log(`La date dans 5 jours sera : ${formattedDate}`);
}

// Export de la fonction
module.exports = displayFutureDate;
