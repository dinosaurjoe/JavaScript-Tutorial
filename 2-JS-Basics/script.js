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

// johnHeight = 6;

// johnAge = 1;

// markHeight = 2;

// markAge = 10;

// tonyHeight = 10;

// tonyAge = 10;

// scoreOne = johnHeight + (johnAge * 5)

// scoreTwo = markHeight + (markAge * 5)

// scoreThree = tonyHeight + (tonyAge * 5)

// if (scoreOne < scoreTwo && scoreTwo > scoreThree) {
//   console.log('Mark wins with a score of ' + scoreTwo);
// } else if (scoreOne > scoreTwo && scoreOne > scoreThree) {
//   console.log('John wins with a score of ' + scoreOne);
// } else if (scoreThree > scoreOne && scoreThree > scoreTwo) {
//   console.log('Tony wins with a score of ' + scoreThree);
// }
// else {
//   console.log('It is a tie, all scored ' + scoreOne);
// }

// Lecture: Functions

// function calculateAge(yearOfBirth) {
//   var age = 2018 - yearOfBirth;
//   return age;
// }

// var ageJoe = calculateAge(1993);
// var ageMike = calculateAge(1969);
// var ageMary = calculateAge(1948);
// // console.log(ageMike);

// function yearsUntilRetirement(name, year) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;

//   if (retirement >= 0) {
//     console.log(name + ' retires in ' + retirement + ' years.');
//   } else {
//     console.log(name + ' has already retired.');
//   }
// }

// yearsUntilRetirement('Joe', 1993);
// yearsUntilRetirement('Mike', 1969);
// yearsUntilRetirement('Mary', 1948);

// // Lecture: Statements and Expressions
// function someFunction(par) {
//   //code
// }

// var someFun = function(par) {
//   //code
// }

// //Expressions
// 3 + 4;
// var x = 3;

// //statements
// if (x === 5) {
//   //do something
// }


//Lecture: Arrays

// var names = ['John', 'Jane', 'Mark'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[0]);
// names[1] = 'Ben';
// console.log(names);

// var john = ['John', 'Smith', 1990, 'designer', false];

// john.push('blue');
// john.unshift('Mr.');
// john.pop();
// john.shift();

// console.log(john);

// // alert(john.indexOf('Smith'));

// if (john.indexOf('teacher') === -1) {
//   console.log('John is not a teacher');
// }

//Lecture: Objects

// var john = {
//   name:'John',
//   lastName: 'Smith',
//   yearOfBirth: 1990,
//   job: 'teacher',
//   isMarried: false
// };

// console.log(john.lastName);
// console.log(john['lastName']);

// var xyz = 'job'
// console.log(john[xyz]);

// john.lastName = 'Miller';
// john['job'] = 'programmer';

// console.log(john)

// var jane = new Object();

// jane.name = 'Jane';
// jane.lastName = 'Smith';
// jane['yearOfBirth'] = 1969;
// jane['job'] = 'retired';
// jane['isMarried'] = true;

// console.log(jane);


//Lecture Objects and Methods

// v1.0
// var john = {
//   name:'John',
//   lastName: 'Smith',
//   yearOfBirth: 1990,
//   job: 'teacher',
//   isMarried: false,
//   family: ['Jane', 'Mark', 'Bob'],
//   calculateAge: function() {
//       return 2018 - this.yearOfBirth;
//   }
// };

// //console.log(john.calculateAge(1990));
// console.log(john.calculateAge())

// var age = john.calculateAge();
// john.age = age;

// console.log(john);

// v2.0
// var john = {
//   name:'John',
//   lastName: 'Smith',
//   yearOfBirth: 1990,
//   job: 'teacher',
//   isMarried: false,
//   family: ['Jane', 'Mark', 'Bob'],
//   calculateAge: function() {
//       //return 2018 - this.yearOfBirth;
//       this.Age = 2016 - this.yearOfBirth;
//   }
// };

// john.calculateAge();
// console.log(john);


// var mike = {
//   yearOfBirth: 1950,
//   calculateAge: function() {
//       //return 2018 - this.yearOfBirth;
//       this.Age = 2016 - this.yearOfBirth;
//   }
// };

// mike.calculateAge();
// console.log(mike);

//Lecture: Loops and Iterations

// for (var i = 0; i < 10; i++){
//   console.log(i);
// }

// var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];


// //for loops

// // for (var i = 0; i < names.length; i++) {
// //   console.log(names[i]);
// // }

// // for (var i = names.length - 1; i >= 0; i--) {
// //   console.log(names[i]);
// // }


// //while loops
// var i = 0;
// while(i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// for (var i = 1; i <= 5; i++) {
//   console.log(i);

//   if (i === 3) {
//     break;
//   }
// }

// for (var i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }

//   console.log(i);
// }
function printFullAge(years) {
    var ages = [];
    var fullAges = [];

    for (var i = 0; i < years.length; i++) {
        ages[i] = 2016 - years[i];
    }

    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
            fullAges.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
            fullAges.push(false);
        }
    }

    return fullAges;
}

var years = [2001, 1985, 1994, 2014, 1973];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);
// console.log(age);
