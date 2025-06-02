// exo1

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });

// Promise.all([promise1, promise2, promise3])
//   .then(values => {
//     console.log(values); // ➜ [3, 42, "foo"]
//   })
//   .catch(error => {
//     console.error("Une des promesses a échoué :", error);
//   });

// exo2


// The code maps each number in the array [1, 2, 3] to a promise that resolves to the number multiplied by 2.
// Promise.all waits for all promises to resolve, then returns an array of results.

// Output:

// [2, 4, 6]