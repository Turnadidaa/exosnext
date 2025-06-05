// app.js

const _ = require('lodash');
const math = require('./math');

// Utilisation des fonctions personnalisées
const sum = math.add(5, 7);
const product = math.multiply(4, 6);

// Utilisation de Lodash pour calculer la somme d’un tableau
const numbers = [1, 2, 3, 4, 5];
const total = _.sum(numbers);

console.log(`Résultat add(5, 7)       : ${sum}`);
console.log(`Résultat multiply(4, 6)  : ${product}`);
console.log(`Somme avec lodash        : ${total}`);
