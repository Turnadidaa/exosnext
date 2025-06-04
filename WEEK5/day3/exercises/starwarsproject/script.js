const button = document.getElementById("get-character");
const showImageButton = document.getElementById("show-image");
const loading = document.getElementById("loading");
const characterInfo = document.getElementById("character-info");
const characterImage = document.getElementById("character-image");
const errorMessage = document.getElementById("error-message");

const nameEl = document.getElementById("name");
const heightEl = document.getElementById("height");
const genderEl = document.getElementById("gender");
const birthYearEl = document.getElementById("birth-year");
const homeWorldEl = document.getElementById("home-world");

const getRandomId = () => Math.floor(Math.random() * 83) + 1;

const fetchCharacter = async () => {
  loading.classList.remove("hidden");
  characterInfo.classList.add("hidden");
  errorMessage.classList.add("hidden");

  const id = getRandomId();

  try {
    const res = await fetch(`https://www.swapi.tech/api/people/${id}`);
    const data = await res.json();
    const character = data.result.properties;

    const homeworldRes = await fetch(character.homeworld);
    const homeworldData = await homeworldRes.json();

    nameEl.textContent = character.name;
    heightEl.textContent = character.height + " cm";
    genderEl.textContent = character.gender;
    birthYearEl.textContent = character.birth_year;
    homeWorldEl.textContent = homeworldData.result.properties.name;

    characterInfo.classList.remove("hidden");
  } catch (error) {
    errorMessage.classList.remove("hidden");
  } finally {
    loading.classList.add("hidden");
  }
};

button.addEventListener("click", fetchCharacter);

// Theme toggle functionality
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;
const videoBackground = document.querySelector(".video-background video");

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  themeSwitch.checked = true;
  body.classList.add('light-theme');
  videoBackground.src = 'static/background2.mp4';
}

themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
    videoBackground.src = 'static/background2.mp4';
  } else {
    body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
    videoBackground.src = 'static/background1.mp4';
  }
});

// Add close button functionality
document.querySelector('.close-button').addEventListener('click', () => {
  const characterInfo = document.getElementById('character-info');
  characterInfo.classList.add('hidden');
  // Reset the form or any other necessary cleanup
  document.getElementById('get-character').disabled = false;
});

// Add image display functionality
showImageButton.addEventListener('click', () => {
  if (characterImage.classList.contains('hidden')) {
    characterImage.classList.remove('hidden');
    showImageButton.innerHTML = '<i class="fas fa-eye-slash"></i><span>Hide Character Image</span>';
  } else {
    characterImage.classList.add('hidden');
    showImageButton.innerHTML = '<i class="fas fa-image"></i><span>Show Character Image</span>';
  }
});
