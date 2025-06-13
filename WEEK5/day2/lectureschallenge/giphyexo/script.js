const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const gifContainer = document.getElementById("gif-container");
const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
searchButton.addEventListener('click',fetchGifs);   
async function fetchGifs() {
    // 1. Récupère la valeur de l'input
    const category = searchInput.value;

    // S'il n'y a rien dans l'input, on ne fait rien pour l'instant
    if (!category) {
        console.log("Veuillez entrer une catégorie de GIF.");
        return;
    }
     gifContainer.innerHTML = '';


    // 2. Construis l'URL complète pour la requête Giphy
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&rating=g&api_key=${API_KEY}`;

    // 3. Affiche l'URL dans la console pour vérifier
    console.log("URL de la requête Giphy :", url);

    
    try {
        // 1. Envoyer la requête et 2. Attendre la réponse
        const response = await fetch(url);

        // 3. Vérifier si la réponse est OK (statut HTTP 2xx)
        if (!response.ok) {
            // Si le statut n'est pas OK, lancer une erreur
            throw new Error(`Erreur HTTP: ${response.status} - ${response.statusText}`);
        }

        // 4. Attendre que la réponse soit convertie en JSON
        const data = await response.json();

        // Afficher les données brutes dans la console pour inspection (utile pour le débogage)
        console.log("Données reçues de Giphy :", data);

        // La prochaine étape sera d'afficher les GIFs avec ces données
        // Appeler une fonction pour afficher les GIFs
        displayGifs(data.data);

    } catch (error) {
        // 5. Gérer toute erreur qui pourrait survenir pendant le fetch ou le parsing
        console.error("Erreur lors de la récupération des GIFs :", error);
        gifContainer.innerHTML = `<p style="color: red;">Oups ! Impossible de charger les GIFs. Erreur : ${error.message}</p>`;
    }
}

// Nous allons définir cette fonction displayGifs dans la prochaine étape
function displayGifs(gifs) {
    // Cette fonction sera remplie plus tard pour ajouter les images à la page
    console.log("Prêt à afficher les GIFs :", gifs);
}
function displayGifs(gifs) {
    // Si la console.log précédente est vide, c'est que l'API n'a rien trouvé
    if (gifs.length === 0) {
        gifContainer.innerHTML = '<p>Aucun GIF trouvé pour cette catégorie.</p>';
        return;
    }

    // Parcourir le tableau de GIFs

    gifs.forEach(gif => {
        // 1. Créer un nouvel élément <img>
        const img = document.createElement("img");

        // 2. Définir son attribut src avec l'URL du GIF (ex: gif.images.fixed_height.url)
        img.src = gif.images.fixed_height.url;

        // 3. Ajouter cet <img> au gifContainer
        gifContainer.appendChild(img);
    });
}