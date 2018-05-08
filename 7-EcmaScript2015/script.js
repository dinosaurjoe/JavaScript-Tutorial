//Lecture: Variable Declarations with let and const

// // ES5

// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// // ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);


// // ES5

// // Variables are function scoped
// function driversLicense5(passedTest) {
//   if (passedTest) {
//     //undefined but will not raise error if variable is undefined
//     // console.log(firstName);
//     var firstName = 'John';
//     var yearOfBirth = 1990;
//   }
//   console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
// }

// driversLicense5(true);

// // ES6

// // variables are block scoped
// function driversLicense6(passedTest) {
//   // Undefined but raises error if it is not defined
//   // console.log(firstName);
//   let firstName;
//   const yearOfBirth = 1990;

//   if (passedTest) {
//     firstName = 'John';
//   }
//   console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
// }

// driversLicense6(true);







// // because variables are block scoped, even though they have the same name they are completely different variables
// let i = 23;

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log(i);


// // Lecture: Blocks and IIFES


// //ES6
// {
//   const a = 1;
//   let b = 2;
//   var c = 3
// }

// // console.log(a + b);
// console.log(c);

// // ES5

// (function() {
//   var c = 3;
// })();

// console.log(c);

// Lecture: Strings in ES6

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2018 - year;
}

//ES5

console.log('This is ' + firstName + ' ' + lastName +
 '. He was born in ' + yearOfBirth + ', Today he is ' +
 calcAge(yearOfBirth) + ' years old.');


 //ES6

 console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);


 const n = `${firstName} ${lastName}`;

  console.log(n.startsWith('n'));
  console.log(n.endsWith('th'));
  console.log(n.includes(' '));
  console.log(`${firstName} `.repeat(5));



