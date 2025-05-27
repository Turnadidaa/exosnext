
// exo1

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(`${i + 1}# choice is ${colors[i]}.`);
// }
// if (colors.includes("Violet")) {
//   console.log("Yeah");
// } else {
//   console.log("No...");
// }

// exo2

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// // Fonction pour déterminer le suffixe ordinal
// function getOrdinal(n) {
//   if (n === 1) return ordinal[1]; // "st"
//   else if (n === 2) return ordinal[2]; // "nd"
//   else if (n === 3) return ordinal[3]; // "rd"
//   else return ordinal[0]; // "th"
// }

// // Affichage des choix avec suffixes ordinals
// for (let i = 0; i < colors.length; i++) {
//   const num = i + 1;
//   const suffix = getOrdinal(num);
//   console.log(`${num}${suffix} choice is ${colors[i]}.`);
// }

// // exo3 
// // ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log("------1------");
// console.log(result);
// // Output:
// // ["bread", "carrot", "potato", "chicken", "apple", "orange"]



// // ------2------
// const country = "USA";
// console.log("------2------");
// console.log([...country]);
// // Output:
// // ["U", "S", "A"]



// // ------Bonus------
// let newArray = [...[,,]];
// console.log("------Bonus------");
// console.log(newArray);
// // Output:
// // [undefined, undefined]


// exo4 

// const users = [
//   { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//   { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//   { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//   { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//   { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//   { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
//   { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
// ];

// // 🌟 1. Create array of "Hello firstName"
// const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
// console.log("🌟 1. welcomeStudents:");
// console.log(welcomeStudents);
// // Output:
// // ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]


// // 🌟 2. Filter Full Stack Residents
// const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
// console.log("\n🌟 2. fullStackResidents:");
// console.log(fullStackResidents);
// // Output: array of user objects with role 'Full Stack Resident'


// // 🌟 3. Bonus : lastNames of Full Stack Residents
// const lastNamesFSR = users
//   .filter(user => user.role === 'Full Stack Resident')
//   .map(user => user.lastName);

// console.log("\n🌟 3. Bonus - lastNames of Full Stack Residents:");
// console.log(lastNamesFSR);
// // Output:
// // ["Bouley", "Alnaji", "Hajek"]

// exo5 

// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// // Utilisation de reduce pour combiner tous les mots en une seule chaîne
// const epicSentence = epic.reduce((acc, word) => acc + " " + word);

// console.log("🌟 Star Wars sentence:");
// console.log(epicSentence);
// // Output: "a long time ago in a galaxy far far away"

// exo6
// const students = [
//   { name: "Ray", course: "Computer Science", isPassed: true },
//   { name: "Liam", course: "Computer Science", isPassed: false },
//   { name: "Jenner", course: "Information Technology", isPassed: true },
//   { name: "Marco", course: "Robotics", isPassed: true },
//   { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
//   { name: "Jamie", course: "Big Data", isPassed: false }
// ];

// // 🌟 1. Filter students who passed the course
// const passedStudents = students.filter(student => student.isPassed === true);

// console.log("🌟 Students who passed:");
// console.log(passedStudents);

// // 🌟 Bonus: Congratulate each student who passed
// console.log("\n🌟 Congratulations messages:");
// passedStudents.forEach(student => {
//   console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
// });
