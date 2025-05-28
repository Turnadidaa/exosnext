// // Exercise 1: Nested functions (Converted to arrow functions)

// let landscape = () => {
//   let result = "";

//   const flat = x => {
//     for (let count = 0; count < x; count++) {
//       result += "_";
//     }
//   };

//   const mountain = x => {
//     result += "/";
//     for (let counter = 0; counter < x; counter++) {
//       result += "'";
//     }
//     result += "\\"; // Escaped backslash
//   };

//   flat(4);
//   mountain(4);
//   flat(4);

//   return result;
// };

// console.log(landscape()); // Expected: "____/''''\\____"

// // ---------------------------------------------------------

// // Exercise 2: Closure
// // Prediction: 13
// // Explanation: addTo(10) returns a function y => 10 + y. addToTen(3) becomes 10 + 3 = 13.
// const addTo = x => y => x + y;
// const addToTen = addTo(10);
// console.log(addToTen(3)); // 13

// // ---------------------------------------------------------

// // Exercise 3: Currying
// // Prediction: 31
// // Explanation: curriedSum(30)(1) = 30 + 1 = 31
// const curriedSum = a => b => a + b;
// console.log(curriedSum(30)(1)); // 31

// // ---------------------------------------------------------

// // Exercise 4: Currying
// // Prediction: 17
// // Explanation: add5 is a function b => 5 + b; add5(12) = 17
// const curriedSum2 = a => b => a + b;
// const add5 = curriedSum2(5);
// console.log(add5(12)); // 17

// // ---------------------------------------------------------

// // Exercise 5: Composing
// // Prediction: 16
// // Explanation: compose(add1, add5)(10) -> add1(add5(10)) = add1(15) = 16
// const compose = (f, g) => a => f(g(a));
// const add1 = num => num + 1;
// const add5_2 = num => num + 5;
// console.log(compose(add1, add5_2)(10)); // 16


// exoninja 

// Curried version of mergeWords
// const mergeWords = (string) => 
//   (nextString) => 
//     nextString === undefined ? string : mergeWords(`${string} ${nextString}`);

// // Example usage:
// console.log(mergeWords('There')('is')('no')('spoon.')()); // "There is no spoon."