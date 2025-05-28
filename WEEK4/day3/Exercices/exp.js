// // 🌟 Exercise 1 : Location
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// };

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// // Output: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


// // 🌟 Exercise 2: Display Student Info
// function displayStudentInfo({ first, last }) {
//     return `Your full name is ${first} ${last}`;
// }

// console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));
// // Output: Your full name is Elie Schoppik


// // 🌟 Exercise 3: User & id
// const users = { user1: 18273, user2: 92833, user3: 90315 };

// const usersArray = Object.entries(users);
// console.log(usersArray);
// // Output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// const usersArrayTimesTwo = usersArray.map(([key, value]) => [key, value * 2]);
// console.log(usersArrayTimesTwo);
// // Output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]


// // 🌟 Exercise 4 : Person class
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');
// console.log(typeof member);
// // Output: object


// // 🌟 Exercise 5 : Dog class
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// // The only valid option is number 2:
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);       // must call super() before using 'this'
//     this.size = size;
//   }
// }


// // 🌟 Exercise 6 : Challenges

// console.log([2] === [2]); // false (different references)
// console.log({} === {});   // false (different references)

// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5 };

// object1.number = 4;
// console.log(object2.number); // 4 (same reference as object1)
// console.log(object3.number); // 4 (same reference as object1)
// console.log(object4.number); // 5 (independent object)


// // Animal class
// class Animal {
//     constructor(name, type, color) {
//         this.name = name;
//         this.type = type;
//         this.color = color;
//     }
// }

// // Mammal class
// class Mammal extends Animal {
//     sound(sound) {
//         return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
//     }
// }

// // Create farmerCow instance
// const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
// console.log(farmerCow.sound('Moooo'));
// // Output: Moooo I'm a cow, named Lily and I'm brown and white
