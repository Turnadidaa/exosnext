const container = document.getElementById('robot-container');
const searchInput = document.getElementById('search');

function displayRobots(filteredRobots) {
  container.innerHTML = '';
  filteredRobots.forEach(robot => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${robot.image}" alt="${robot.name}" />
      <h2>${robot.name}</h2>
      <p>${robot.username}</p>
      <p>${robot.email}</p>
      <p>${robot.profession}</p>
    `;
    container.appendChild(card);
  });
}

searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.toLowerCase();
  const filtered = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchValue) ||
    robot.username.toLowerCase().includes(searchValue) ||
    robot.profession.toLowerCase().includes(searchValue)
  );
  displayRobots(filtered);
});

// Affichage initial
displayRobots(robots);
