// const giphyURL = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// fetch(giphyURL)
//   .then(response => {
//     if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//     return response.json();
//   })
//   .then(data => {
//     const gifs = data.data;
//     const container = document.getElementById("gif-container");

//     gifs.forEach(gif => {
//       const img = document.createElement("img");
//       img.src = gif.images.fixed_height.url; 
//       img.alt = gif.title;
//       container.appendChild(img);
//     });
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });


// //   exo2 

// const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"; //
// const query = "sun";
// const limit = 10;
// const offset = 2;

// const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=${offset}`;

// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log("GIFs reçus :", data);
//   })
//   .catch(error => {
//     console.error("Erreur lors de la récupération des GIFs :", error);
//   });

// //   exo3 

// async function getStarship() {
//   try {
//     const response = await fetch("https://www.swapi.tech/api/starships/9/");

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const objectStarWars = await response.json();
//     console.log(objectStarWars.result);
//   } catch (error) {
//     console.error("An error occurred while fetching the Star Wars data:");
//     console.error(error);
//   }
// }

// // Appel de la fonction
// getStarship();

// // exo4 

// calling
// resolved
