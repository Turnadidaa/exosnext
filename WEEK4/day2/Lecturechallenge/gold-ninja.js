
// exo gold

// // Exercise 1: Analyzing the map method
// const doubled = [1, 2, 3].map(num => {
//   if (typeof num === 'number') return num * 2;
//   return;
// });
// console.log(doubled); // Output: [2, 4, 6]

// // Explanation: All elements are numbers, so each is doubled.


// // Exercise 2: Analyzing the reduce method
// const reduced = [[0, 1], [2, 3]].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);
//   },
//   [1, 2],
// );
// console.log(reduced); // Output: [1, 2, 0, 1, 2, 3]

// // Explanation: Start with [1, 2], then concatenate [0, 1], then [2, 3]


// // Exercise 3: Analyze this code
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//   console.log(num, i); // i is the index of the current element
//   alert(num);          // Alerts each number
//   return num * 2;
// });

// // Value of i: The index of each element (0, 1, 2, 3, 4, 5)


// // Exercise 4 : Nested arrays
// const array = [[1],[2],[3],[[[4]]],[[[5]]]];
// const flattened = array.flat(2);
// console.log(flattened); // Output: [1, 2, 3, [4], [5]]

// // Bonus: one-liner
// const flatOneLine = [[1],[2],[3],[[[4]]],[[[5]]]].flat(2);


// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
// const greetingSentences = greeting.map(sentence => sentence.join(" "));
// console.log(greetingSentences); // ["Hello young grasshopper!","you are","learning fast!"]

// const greetingString = greetingSentences.join(" ");
// console.log(greetingString); // 'Hello young grasshopper! you are learning fast!'

// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]];
// const untrapped = trapped.flat(Infinity);
// console.log(untrapped); // [3]

// exo ninja 

// // Exercise 1 : Dog age to Human years
// const data = [
//   { name: 'Butters', age: 3, type: 'dog' },
//   { name: 'Cuty', age: 5, type: 'rabbit' },
//   { name: 'Lizzy', age: 6, type: 'dog' },
//   { name: 'Red', age: 1, type: 'cat' },
//   { name: 'Joey', age: 3, type: 'dog' },
//   { name: 'Rex', age: 10, type: 'dog' },
// ];

// // Using loop
// let sum = 0;
// for (let animal of data) {
//   if (animal.type === 'dog') {
//     sum += animal.age * 7;
//   }
// }
// console.log("Total dog age in human years (loop):", sum);

// // Using reduce()
// const dogAgeSum = data.reduce((acc, animal) => {
//   if (animal.type === 'dog') {
//     return acc + animal.age * 7;
//   }
//   return acc;
// }, 0);
// console.log("Total dog age in human years (reduce):", dogAgeSum);


// // Exercise 2 : Email
// const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';
// const cleanedEmail = userEmail3.trim();
// console.log("Cleaned Email:", cleanedEmail);


// // Exercise 3 : Employees #3
// const users = [
//   { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//   { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//   { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//   { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//   { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//   { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//   { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
// ];

// const userRoles = {};
// users.forEach(user => {
//   const fullName = `${user.firstName} ${user.lastName}`;
//   userRoles[fullName] = user.role;
// });
// console.log("User Roles:", userRoles);


// // Exercise 4 : Array to Object
// const letters = ['x', 'y', 'z', 'z'];

// // Using for loop
// const letterCount = {};
// for (let letter of letters) {
//   letterCount[letter] = (letterCount[letter] || 0) + 1;
// }
// console.log("Letter Count (loop):", letterCount);

// // Using reduce()
// const letterCountReduce = letters.reduce((acc, letter) => {
//   acc[letter] = (acc[letter] || 0) + 1;
//   return acc;
// }, {});
// console.log("Letter Count (reduce):", letterCountReduce);
