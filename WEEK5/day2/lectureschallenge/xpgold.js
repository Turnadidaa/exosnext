// // exo1 
// const API_KEY = "dc6zaTOxFJmzC"; // Clé de test publique
// const button = document.getElementById("getGif");
// const gifContainer = document.getElementById("gifContainer");

// button.addEventListener("click", async () => {
//   try {
//     const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    
//     if (!response.ok) {
//       throw new Error(`Erreur HTTP : ${response.status}`);
//     }

//     const data = await response.json();
//     const gifUrl = data.data.images.original.url;

//     // Nettoyer l'ancien contenu
//     gifContainer.innerHTML = "";

//     // Créer une image et l'ajouter à la page
//     const img = document.createElement("img");
//     img.src = gifUrl;
//     img.alt = "GIF aléatoire";
//     gifContainer.appendChild(img);
//   } catch (error) {
//     console.error("Erreur lors de la récupération du GIF :", error);
//     gifContainer.innerHTML = "<p>Impossible de charger un GIF. Réessaye !</p>";
//   }
// });

// exo2 

// // The function sequentialStart() runs two promises one after the other using await.

//     It first calls resolveAfter2Seconds(), which logs "starting slow promise", waits 2 seconds, logs "slow promise is done", and then returns "slow".

//     After that, it calls resolveAfter1Second(), which logs "starting fast promise", waits 1 second, logs "fast promise is done", and then returns "fast".

// Because the promises are awaited sequentially, the total time is about 3 seconds, and the output is:

// ==SEQUENTIAL START==
// starting slow promise
// slow promise is done
// slow
// starting fast promise
// fast promise is done
// fast

// exo3 

// The function concurrentStart() starts after 4 seconds.

// Inside it:

//     Both resolveAfter2Seconds() and resolveAfter1Second() are called immediately, so both promises start running at the same time.

//     "starting slow promise" and "starting fast promise" are printed right away.

//     After 1 second, "fast promise is done" is printed.

//     After 2 seconds, "slow promise is done" is printed.

//     Then, await slow logs "slow", and await fast logs "fast".

// ✅ Final Output:

// ==CONCURRENT START with await==
// starting slow promise
// starting fast promise
// fast promise is done
// slow promise is done
// slow
// fast

// // exo4 

// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/postsss", // broken on purpose
//   "https://jsonplaceholder.typicode.com/albums"
// ];

// const getData = async function () {
//   try {
//     const [users, posts, albums] = await Promise.all(
//       urls.map(async (url) => {
//         const response = await fetch(url);
//         return await response.json();
//       })
//     );
//     console.log("users", users);
//     console.log("posts", posts);
//     console.log("albums", albums);
//   } catch (error) {
//     console.log("ooooooops", error);
//   }
// };

// getData();
