// Function constructor

// var john = {
//   name: 'John',
//   yearOfBirth: 1990,
//   job: 'teacher',
// };


// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }

// Person.prototype.calculateAge = function() {
//     console.log(2018 - this.yearOfBirth);
//   }

// Person.prototype.lastName = 'Smith';

// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);



// Object.create
// var personProto = {
//   calculateAge: function() {
//     console.log(2018 - this.yearOfBirth);
//   }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto,
//   {
//     name: { value: 'Jane'},
//     yearOfBirth: { value: 1969},
//     job: { value: 'designer'}
//   });


// Primitives vs objects


// //primitives
// var a = 23;
// var b = a;
// a = 46;

// console.log(a);
// console.log(b);

// //objects

// var obj1 = {
//   name: 'John',
//   age: 28
// };

// var obj2 = obj1;

// obj1.age = 30;

// console.log(obj1.age);
// console.log(obj2.age);

// //functions

// var age = 24;
// var obj = {
//   name: 'Joe',
//   city: 'Chicago'
// };

// function change(a, b) {
//   a = 25;
//   b.city = 'Berlin';
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);




// Lecture: Passing functions as arguments

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2018 - el;
// }

// function isFullAge(el) {
//   return el >= 18;
// }

// function maxHeartRate(el) {

//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - (0.67 * el));
//   } else {
//     return -1;
//   }

// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);


// console.log(ages);
// console.log(rates)

//Lecture: Functions returning functions

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//           console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//           console.log(name + ', what subject do you teach?');
//         }
//     } else {
//         return function(name) {
//           console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('John');
// // designerQuestion('Jane');
// // designerQuestion('Mark');
// // designerQuestion('Mike');

// interviewQuestion('teacher')('Mark');

// Lecture: IIFE

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();

// (function () {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
//   })();

// // console.log(score);

// (function (goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
//   })(5);

//Lecture: Closures

// function retirement(retirementAge) {
//   var a = ' years left until retirement.';
//   return function(yearOfBirth) {
//     var age = 2018 - yearOfBirth;
//     console.log((retirementAge - age) + a);
//   }
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);
// retirementUS(1990);
// retirementGermany(1990);
// retirementIceland(1990);
// // retirement(66)(1990);

// // function interviewQuestion(job) {
// //     if (job === 'designer') {
// //         return function(name) {
// //           console.log(name + ', can you please explain what UX design is?');
// //         }
// //     } else if (job === 'teacher') {
// //         return function(name) {
// //           console.log(name + ', what subject do you teach?');
// //         }
// //     } else {
// //         return function(name) {
// //           console.log('Hello ' + name + ', what do you do?');
// //         }
// //     }
// // }

// function interviewQuestion(name) {
//   var b = 'Hello ' + name;
//   return function(job){
//     if (job === 'designer') {
//       console.log(b + ', can you please explain what UX design is?');
//     } else if (job === 'teacher') {
//       console.log(b + ', what subject do you teach?');
//     } else {
//       console.log(b + 'what do you do?');
//     }
// }
// }

// interviewQuestion('Joe')('designer');

// Lecture: Bind, call and apply

// var john = {
//   name: 'John',
//   age: 26,
//   job: 'teacher',
//   presentation: function(style, timeOfDay) {
//     if (style==='formal') {
//       console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//     } else if (style==='friendly'){
//       console.log('Hey! What\'s up I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//     }
//   }
// };

// var emily = {
//   name: 'Emily',
//   age: 35,
//   job: 'designer'
// };

// john.presentation('friendly', 'morning');

// john.presentation.call(emily, 'formal', 'afternoon');

// // john.presentation.apply(emily, ['friendly', 'afternoon']);

// var johnFriendly = john.presentation.bind(john, 'friendly');

// johnFriendly('morning');

// johnFriendly('night');

// var emilyFormal = john.presentation.bind(emily, 'formal');


// emilyFormal('afternoon');



// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2018 - el;
// }

// function isFullAge(limit, el) {
//   return el >= limit;
// }


// var ages = arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 40));

// console.log(ages);
// console.log(fullJapan);




// Coding challenge


// 1.Build a function contructor called Question to describe a question.
//      a question should include:
//      a). question itself
//      b). the answers from which the player can choose the correct one
//      c. correct answer (number)
(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion =
  function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }

  Question.prototype.checkAnswer =
    function(ans) {
      if (ans === this.correct) {
        console.log('Correct answer!');
      } else {
        console.log('Wrong!');
      }
    }
  // 2. Create a couple of questions using the constructor
  var q1 = new Question('Does trash smell good?',
    ['Yes', 'No'], 1);
  var q2 = new Question('What color is the swamp?',
    ['blue', 'green', 'orange'], 1)
  var q3 = new Question('Is cheese tasty?',
    ['Yes', 'No'], 0)
  // 3. Store them all inside an array
  var questions = [q1, q2, q3];
  // 4. Select one random question and log it on the console, together with the possible answers
  var n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();
  // 5. Use the 'prompt' function to ask the user for the correct answer

  var answer = parseInt(prompt('Please select the correct answer.'));
  // 6. Check if the answer is correct and print to the console whether it is correct or not
  questions[n].checkAnswer(answer);
  // 7. Suppose this could would be a plugin for other programmers to use in their code. So make sure that all the code is private.
})();





