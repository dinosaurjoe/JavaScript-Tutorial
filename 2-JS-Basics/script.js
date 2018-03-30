// Lecture: variables

// var name = 'John';
// console.log(name);

// var lastName = 'Smith';
// console.log(lastName);

// var age = 26;
// console.log(age);

// var fullAge = true;
// console.log(fullAge);

// Lecture: variables 2

// var name = 'John';
// var age = 26;

// // console.log(name + age);
// // console.log(age + age);

// var job, isMarried;
// // console.log(job);

// job = 'teacher';
// isMarried = false;

// console.log(name + ' is a ' + age + ' year old ' + job + '. Is he Married? ' + isMarried + '.');

// age = 'thirty six';
// job = 'driver';

// console.log(name + ' is a ' + age + ' year old ' + job + '. Is he Married? ' + isMarried + '.');

// var lastName = prompt('What is the last name?');
// console.log(lastName);

// alert(name + ' is a ' + age + ' year old ' + job + '. Is he Married? ' + isMarried + '.');


//Lecture: operators
// var now = 2018;
// var birthYear = now - 24;

// birthYear = now - 24 * 2;
// //2018 - 48
// //1970
// console.log(birthYear)

// var ageJohn = 30;
// var ageMark = 30;

// ageJohn = ageMark = (3 + 5) * 4 - 6;
// //ageJohn = ageMark = 26
// //ageJohn = 26
// ageJohn++;
// ageMark *= 2;

// console.log(ageJohn);
// console.log(ageMark);


//Lecture: if/else statements

// var name = 'John';
// var age = 26;
// var isMarried = 'yes';

// if (isMarried === 'yes') {
//   console.log(name + ' is married!');
// } else {
//   console.log(name + ' is not married.');
// }

// isMarried = false;
// // if(isMarried) {
// //   console.log('YES!');
// // } else {
// //   console.log('NO!');
// // }

// if(isMarried) {
//   console.log('YES!');
// }

// if (23 === "23") {
//   console.log('Something to print...');
// }

//Lecture: boolean logic and switch

// var age = 25;

// if (age < 20) {
//   console.log('John is a teenager');
// } else if (age >= 20 && age < 30) {
//   console.log('John is a young man');
// } else {
//   console.log('John is a man');
// }

// var job = 'teacher';

// job = prompt('What does John do?')
// switch (job) {
//   case 'teacher':
//     console.log('John teaches kids');
//     break;
//   case 'driver':
//     console.log('John drives a cab');
//     break;
//   case 'cop':
//     console.log('John helps fight crime');
//     break;
//   default:
//     console.log('John does something else');
// }

johnHeight = 6;

johnAge = 1;

markHeight = 2;

markAge = 10;

tonyHeight = 10;

tonyAge = 10;

scoreOne = johnHeight + (johnAge * 5)

scoreTwo = markHeight + (markAge * 5)

scoreThree = tonyHeight + (tonyAge * 5)

if (scoreOne < scoreTwo && scoreTwo > scoreThree) {
  console.log('Mark wins with a score of ' + scoreTwo);
} else if (scoreOne > scoreTwo && scoreOne > scoreThree) {
  console.log('John wins with a score of ' + scoreOne);
} else if (scoreThree > scoreOne && scoreThree > scoreTwo) {
  console.log('Tony wins with a score of ' + scoreThree);
}
else {
  console.log('It is a tie, all scored ' + scoreOne);
}


