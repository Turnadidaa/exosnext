// const gameInfo = [
//   {
//     username: "john",
//     team: "red",
//     score: 5,
//     items: ["ball", "book", "pen"]
//   },
//   {
//     username: "becky",
//     team: "blue",
//     score: 10,
//     items: ["tape", "backpack", "pen"]
//   },
//   {
//     username: "susy",
//     team: "red",
//     score: 55,
//     items: ["ball", "eraser", "pen"]
//   },
//   {
//     username: "tyson",
//     team: "green",
//     score: 1,
//     items: ["book", "pen"]
//   },
// ];

// // 1. Array usernames with "!" added
// const usernames = [];
// gameInfo.forEach(player => {
//   usernames.push(player.username + "!");
// });

// console.log(usernames); // ["john!", "becky!", "susy!", "tyson!"]

// // 2. Array winners with score > 5
// const winners = [];
// gameInfo.forEach(player => {
//   if (player.score > 5) {
//     winners.push(player.username);
//   }
// });

// console.log(winners); // ["becky", "susy"]

// // 3. Total score of all users
// let totalScore = 0;
// gameInfo.forEach(player => {
//   totalScore += player.score;
// });

// console.log(totalScore); // 71

// Dailychallenge 2 

// const inventory = [
//   { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
//   { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
//   { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
//   { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
//   { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
// ];

// // Part I
// function getCarHonda(carInventory) {
//   const firstHonda = carInventory.find(car => car.car_make === "Honda");
//   if (firstHonda) {
//     return `This is a ${firstHonda.car_make} ${firstHonda.car_model} from ${firstHonda.car_year}.`;
//   } else {
//     return "No Honda car found.";
//   }
// }

// console.log(getCarHonda(inventory));
// // Output: This is a Honda Accord from 1983.

// // Part II
// function sortCarInventoryByYear(carInventory) {
//   return carInventory.slice().sort((a, b) => a.car_year - b.car_year);
// }

// console.log(sortCarInventoryByYear(inventory));
// /*
// [
//   { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
//   { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
//   { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
//   { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
//   { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
// ]
// */
