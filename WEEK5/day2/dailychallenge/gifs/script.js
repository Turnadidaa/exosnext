const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById("gif-form");
const input = document.getElementById("search-input");
const gifContainer = document.getElementById("gif-container");
const deleteAllBtn = document.getElementById("delete-all");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = input.value.trim();
  if (!searchTerm) return;

  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchTerm}&rating=g`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log("GIF reçu :", result);

    const gifUrl = result.data.images.fixed_height.url;

    // Crée un conteneur pour le gif + bouton delete
    const gifBox = document.createElement("div");
    gifBox.classList.add("gif-box");

    const gifImg = document.createElement("img");
    gifImg.src = gifUrl;
    gifImg.alt = result.data.title;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => gifBox.remove());

 const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById("gif-form");
const input = document.getElementById("search-input");
const screenGif = document.getElementById("screen-gif");
const deleteAllBtn = document.getElementById("delete-all");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = input.value.trim();
  if (!searchTerm) return;

  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchTerm}&rating=g`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log("GIF reçu :", result);

    const gifUrl = result.data.images.fixed_height.url;

    // Affiche le GIF dans l'écran de la console
    screenGif.innerHTML = `<img src="${gifUrl}" alt="GIF">`;
  } catch (error) {
    console.error("Erreur lors du fetch :", error);
  }

  input.value = "";
});

deleteAllBtn.addEventListener("click", () => {
  screenGif.innerHTML = "";
});
   gifBox.appendChild(gifImg);
    gifBox.appendChild(deleteBtn);
    gifContainer.appendChild(gifBox);
  } catch (error) {
    console.error("Erreur lors du fetch :", error);
  }

  input.value = "";
});

deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
