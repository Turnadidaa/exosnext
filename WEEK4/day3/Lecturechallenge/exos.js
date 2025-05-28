
// // -------- Exercise 1: printFullName --------
// function printFullName({ first, last }) {
//   return `Your full name is ${first} ${last}`;
// }

// console.log(printFullName({ first: 'Elie', last: 'Schoppik' }));


// // -------- Exercise 2: keys and values --------
// function keysAndValues(obj) {
//   const keys = Object.keys(obj).sort();
//   const values = keys.map(key => obj[key]);
//   return [keys, values];
// }

// console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
// console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
// console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));


// // -------- Exercise 3: Counter class --------
// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count++;
//   }
// }

// const counterOne = new Counter();
// counterOne.increment();
// counterOne.increment();

// const counterTwo = counterOne; // counterTwo pointe vers le même objet
// counterTwo.increment();

// console.log(counterOne.count); // Affiche 3


// execice xp ninja

// The original code causes an error because in a derived class constructor,
// 'super()' must be called before using 'this' or executing any other statements.
// Calling console.log before super() violates this rule.

// Corrected version calls super() first, then logs the message.

// Output after correction:
// I'm a bird. 🦢
// I'm pink. 🌸
