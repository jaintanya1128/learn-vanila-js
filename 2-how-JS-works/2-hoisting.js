/////////////////////////////////////
/*********** JavaScript | Hoisting   **************/
//This process of assigning variable declarations a default value of 'undefined' during the creation phase is called Hoisting.
/*
	- In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.
	- Basically, it gives us an advantage that no matter where functions and variables are declared,
		they are moved to the top of their scope regardless of whether their scope is global or local.
	- It allows us to call functions before even writing them in our code.

Note: JavaScript only hoists declarations, not the initializations.

The following is the sequence in which variable declaration and initialization occurs.
Declaration –> Initialization/Assignment –> Usage
*/
// Variable lifecycle
let a; // Declaration
a = 100; // Assignment
console.log(a); // Usage

/*
However, in javascript, undeclared variables do not exist until code assigning them is executed, i.e. the execution phase is executed.
Therefore, assigning a value to an undeclared variable implicitly creates it as a global variable when the assignment is executed.
This means that all undeclared variables are global variables.
*/

// hoisting
function codeHoist() {
	a = 10;
	let b = 50;
}
codeHoist();
console.log(a); // 10 //here, a is undeclared variable and is assigned to global scope, hence can be accessed here to print value
console.log(b); // ReferenceError : b is not defined

/* Note:
There’s a difference between ReferenceError and undefined error.
- An undefined error occurs when we have a variable which is either not defined or explicitly defined as type undefined.
- ReferenceError is thrown when trying to access a previously undeclared variable.
*/

//Hoisting with Var
console.log(name); // undefined
var name = 'Tanya Jain';

//how interpreter sees the above code
var name;
console.log(name); // undefined
name = 'Tanya Jain';

//similarly this happens within function as well
function func() {
	console.log(name);
	var name = 'Tanya Jain';
}
func(); //undefined
//this is how interpreter also sees the code
function func() {
	var name;
	console.log(name);
	name = 'Tanya Jain';
}

//Hence, to avoid this pitfall,we can make sure to declare and assign the variable at the same time,before using it.
//OR use let and const for variable declaration

// functions
calculateAge(1965);

function calculateAge(year) {
	console.log(2016 - year);
}

//interviewQuestion: Hoisting does not works with Function Expressions.
// retirement(1956); //will give error when function is invoked from here.
var retirement = function(year) {
	console.log(65 - (2016 - year));
};
retirement(1956);

// variables
console.log(age);
var age = 23;

function foo() {
	console.log(age);
	var age = 65;
	console.log(age);
}
foo();
console.log(age);
