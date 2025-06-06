const prompt = require('prompt-sync')();

// Demander le nom complet à l'utilisateur
const fullName = prompt("Entrez votre nom complet (ex: John Doe) : ");

// Définir la regex
const nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

// Vérifier la validité
if (nameRegex.test(fullName)) {
  console.log("✅ Nom valide !");
} else {
  console.log("❌ Nom invalide. Il doit contenir deux mots séparés par un espace, uniquement des lettres, et chaque mot doit commencer par une majuscule.");
}
