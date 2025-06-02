// exo1 :

function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(`${num} is less than or equal to 10`);
    } else {
      reject(`${num} is greater than 10`);
    }
  });
}

// Test case: should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Test case: should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error));


//   exo2 :

const delayedSuccess = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000); // 4 seconds = 4000 milliseconds
});

// Utilisation de la promesse
delayedSuccess
  .then(result => console.log(result))   // Affichera "success" après 4 secondes
  .catch(error => console.log(error));

//   exo3 :
// 1
const promise1 = Promise.resolve(3);

promise1
  .then(value => console.log("Resolved with:", value))  // Résultat : "Resolved with: 3"
  .catch(error => console.log("Rejected with:", error));


// 2
const promises2 = promise1.reject("BOO")

promises2
    .then(value => console.log("Resolved with:", value))
    .catch(error => console.log("Rejected with:", error)); // Résultat : "Rejected with: BOO"



// EXO4 :

