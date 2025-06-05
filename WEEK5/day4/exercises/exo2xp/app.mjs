


import people from './data.mjs';

// Fonction pour calculer la moyenne d'âge
function calculateAverageAge(personArray) {
  const totalAge = personArray.reduce((sum, person) => sum + person.age, 0);
  return totalAge / personArray.length;
}

// Utilisation de la fonction
const averageAge = calculateAverageAge(people);
console.log(`Average age: ${averageAge}`);
