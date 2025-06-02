
// // Daily Challenge - Promises

// // 1. Transforme tous les mots en MAJUSCULES
// function makeAllCaps(words) {
//   return new Promise((resolve, reject) => {
//     if (words.every(word => typeof word === "string")) {
//       resolve(words.map(word => word.toUpperCase()));
//     } else {
//       reject("Erreur : tous les éléments doivent être des chaînes de caractères.");
//     }
//   });
// }

// // 2. Trie les mots SI le tableau a plus de 4 éléments
// function sortWords(words) {
//   return new Promise((resolve, reject) => {
//     if (words.length > 4) {
//       resolve(words.sort());
//     } else {
//       reject("Erreur : le tableau doit contenir plus de 4 mots.");
//     }
//   });
// }

// // 🧪 TESTS

// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//   .then(sortWords)
//   .then(console.log)
//   .catch(console.log);

// // ["APPLE", "BANANA", "KIWI", "MELON", "PEAR"]


// // Dailychallenge 2 

// // 1. Convertit la chaîne JSON en objet JS
// function toJs() {
//   return new Promise((resolve, reject) => {
//     const morseObject = JSON.parse(morse); // `morse` est le JSON fourni
//     if (Object.keys(morseObject).length === 0) {
//       reject("Erreur : objet morse vide !");
//     } else {
//       resolve(morseObject);
//     }
//   });
// }

// // 2. Demande un mot et le convertit en morse
// function toMorse(morseJS) {
//   return new Promise((resolve, reject) => {
//     const userInput = prompt("Entrez un mot ou une phrase :").toLowerCase();
//     const translation = [];

//     for (let char of userInput) {
//       if (morseJS[char]) {
//         translation.push(morseJS[char]);
//       } else {
//         return reject(`Erreur : le caractère "${char}" n'existe pas en morse.`);
//       }
//     }

//     resolve(translation);
//   });
// }

// // 3. Affiche la traduction sur la page (DOM)
// function joinWords(morseTranslation) {
//   const container = document.createElement("pre");
//   container.textContent = morseTranslation.join("\n");
//   document.body.appendChild(container);
// }
