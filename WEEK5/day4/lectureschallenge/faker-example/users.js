
const { faker } = require('@faker-js/faker');
const prompt = require('prompt-sync')();

const users = [];

function addFakeUser() {
  const user = {
    name: faker.person.fullName(),
    street: faker.location.streetAddress(),
    country: faker.location.country(),
  };
  users.push(user);
}

function addRealUser() {
  const name = prompt('Nom : ');
  const street = prompt('Rue : ');
  const country = prompt('Pays : ');
  users.push({ name, street, country });
}

function displayUsers() {
  console.log("Liste des utilisateurs :");
  users.forEach((user, i) => {
    console.log(`${i + 1}. ${user.name}, ${user.street}, ${user.country}`);
  });
}

// Exemple d'utilisation :
addFakeUser();
addFakeUser();
addRealUser();
displayUsers();
