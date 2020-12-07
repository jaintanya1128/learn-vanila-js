/**********************************
 * Lecture: Objects and properties
 **********************************/

/*
OBJECT:
JavaScript variables can contain single values:-   var person = "John Doe";
Objects are variables too. But objects can contain many values. :-  var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
Hence a JavaScript object is a collection of named values.

OBJECT PROPERTY:
The named values, in JavaScript objects, are called properties.

-DELETE property:
The delete keyword deletes both the value of the property and the property itself.
The delete operator is designed to be used on object properties. It has no effect on variables or functions.
The delete operator should not be used on predefined JavaScript object properties. It can crash your application.
The delete keyword does not delete inherited properties, but if you delete a prototype property, it will affect all objects inherited from the prototype.

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
delete person.age;   // or delete person["age"];


OBJECT METHODS:
Methods are actions that can be performed on objects.
Object properties can be both primitive values, other objects, and functions.
An object method is an object property containing a function definition.
Hence, JavaScript obje1cts are containers for named values, called properties and methods.


There are different ways to create new objects:
1. Define and create a single object, using an object literal.
2. Define and create a single object, with the keyword new.
3. Define an object constructor, and then create objects of the constructed type.
4. In ECMAScript 5, an object can also be created with the function Object.create().


NOTE: Objects are mutable: They are addressed by reference, not by value.
*/

/*
OBJECT LITERAL:
This is the easiest way to create a JavaScript Object.
Here we define and create an object in one statement.

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);
*/


/*
OBJECT via NEW KEYWORD:

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/* OBJECTS are MUTABLE
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

var x = person; //this will not create a copy of person object rather it will point to the same object.
x.age = 10;

console.log(person); //note that person.age is also changed to 10
*/

/*****************************
 * Objects and methods
 */
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/*
OBJECT CONSTRUCTOR:
-It is considered good practice to name constructor functions with an upper-case first letter.
-Sometimes we need a "blueprint" for creating many objects of the same "type".
-The way to create an "object type", is to use an object constructor function.

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");


You cannot add a new method to an object constructor the same way you add a new method to an existing object.
Person.nationality = "English";
console.log("The nationality of my father is " + myFather.nationality);

Adding methods to an object constructor must be done inside the constructor function.
function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.nationality = "English";
}
*/