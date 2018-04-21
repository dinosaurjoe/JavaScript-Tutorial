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


//primitives
var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);

//objects

var obj1 = {
  name: 'John',
  age: 28
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

//functions

var age = 24;
var obj = {
  name: 'Joe',
  city: 'Chicago'
};

function change(a, b) {
  a = 25;
  b.city = 'Berlin';
}

change(age, obj);

console.log(age);
console.log(obj.city);






























