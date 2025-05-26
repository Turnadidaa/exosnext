function makeJuice(size) {
  const ingredients = [];

  function addIngredients(ing1, ing2, ing3) {
    ingredients.push(ing1, ing2, ing3);
  }

  function displayJuice() {
    const juiceDisplay = document.getElementById('juiceDisplay');
    juiceDisplay.textContent = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
  }

  return {
    addIngredients,
    displayJuice,
  };
}

document.getElementById('ingredientsForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche la soumission du formulaire (pas de reload)

  const size = document.getElementById('sizeSelect').value;

  // Crée l’objet juice bar avec la taille choisie
  const juiceBar = makeJuice(size);

  // Récupère les ingrédients des champs
  const ing1 = document.getElementById('ing1').value.trim();
  const ing2 = document.getElementById('ing2').value.trim();
  const ing3 = document.getElementById('ing3').value.trim();
  const ing4 = document.getElementById('ing4').value.trim();
  const ing5 = document.getElementById('ing5').value.trim();
  const ing6 = document.getElementById('ing6').value.trim();

  // Ajoute les deux groupes d'ingrédients
  juiceBar.addIngredients(ing1, ing2, ing3);
  juiceBar.addIngredients(ing4, ing5, ing6);

  // Affiche le résultat
  juiceBar.displayJuice();

  // Optionnel : vider le formulaire après soumission
  this.reset();
});
