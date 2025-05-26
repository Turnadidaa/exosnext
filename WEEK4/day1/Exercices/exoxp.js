// // 🌟 Exercise 1 : Scope

// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3; // a est redéfini localement dans le bloc if
//     }
//     alert(`inside the funcOne function ${a}`);
// }
// // #1.1 - run in the console:
// funcOne(); // Affichera : "inside the funcOne function 3"
// // #1.2 What will happen if the variable is declared with const instead of let ?
// // Si on utilise const, une erreur se produira à la ligne `a = 3;` car const ne permet pas de réassigner la variable.

// // #2
// let a = 0;
// function funcTwo() {
//     a = 5; // modifie la variable globale a
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree(); // Affichera : "inside the funcThree function 0"
// funcTwo();    // Change a en 5
// funcThree(); // Affichera : "inside the funcThree function 5"

// // #2.2 What will happen if the variable is declared with const instead of let ?
// // Si a est déclaré avec const, une erreur se produira dans funcTwo() car on ne peut pas réassigner une constante.

// // #3
// function funcFour() {
//     window.a = "hello"; // ajoute a comme variable globale via l'objet window
// }

// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour();  // Définit window.a = "hello"
// funcFive();  // Affichera : "inside the funcFive function hello"

// // #4
// let a = 1;
// function funcSix() {
//     let a = "test"; // a local à la fonction
//     alert(`inside the funcSix function ${a}`);
// }

// // #4.1 - run in the console:
// funcSix(); // Affichera : "inside the funcSix function test"
// // #4.2 What will happen if the variable is declared with const instead of let ?
// // Cela fonctionnera aussi. const permet de déclarer une variable locale (non modifiable mais toujours accessible localement).

// // #5
// let a = 2;
// if (true) {
//     let a = 5; // portée limitée au bloc if
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // Affichera :
// // "in the if block 5"
// // "outside of the if block 2"

// // #5.2 What will happen if the variable is declared with const instead of let ?
// // Le comportement restera le même. const et let ont tous deux une portée de bloc.


// exo2 : ternary operator

// const winBattle = () => true;
// const experiencePoints = winBattle() ? 10 : 1;
// console.log(experiencePoints); // Affichera 10 si winBattle() retourne true, sinon 1

// exo3 : is it a string ?

// const isString = value => typeof value === 'string';

// Exo 4 : Find the sum

// const sum = (a, b) => a + b;

// exo 5 : kg and grams

// 🌟 Exercise 5 : Kg and grams

// // 1. Function declaration
// function convertKgToGrams(weightKg) {
//     return weightKg * 1000;
// }
// console.log(convertKgToGrams(2)); // 2000

// // 2. Function expression
// const convertKgToGramsExpr = function(weightKg) {
//     return weightKg * 1000;
// };
// console.log(convertKgToGramsExpr(3.5)); // 3500

// // Difference: function declaration is hoisted (can be called before it’s defined), 
// // while function expression is not hoisted.

// // 3. One-line arrow function
// const convertKgToGramsArrow = weightKg => weightKg * 1000;
// console.log(convertKgToGramsArrow(1.2)); // 1200

// exo 6 : fortune teller
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>Fortune Teller</title>
// </head>
// <body>

//   <div id="fortune"></div>

//   <script>
//     // 🌟 Exercise 6 : Fortune teller

//     (function(children, partner, location, job) {
//       const message = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
//       document.getElementById("fortune").textContent = message;
//     })(3, "Alex", "Morocco", "Software Engineer");
//   </script>

// </body>
// </html>

// exo7 : welcome 

