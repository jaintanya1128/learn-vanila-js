//----------------------------------------------------------------------------------------------------------------------------------------------------
/******************************************
 * TOPIC:  Type of errors
 */
/*
//In JS we have only 3 type of errors:
1. Type error
2. Syntax error
3. Reference error
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------
/*****************************
 * TOPIC: Basic operators
 */
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yeahMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older tha John');
var x;
console.log(typeof x); //undefined

//----------------------------------------------------------------------------------------------------------------------------------------------------
/*****************************
 * TOPIC: Operator precedence
 */

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

//Associativity
//Associativity determines the way in which operators of the same precedence are parsed.
// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);

//----------------------------------------------------------------------------------------------------------------------------------------------------
/*****************************
 * TOPIC: If / else statements
 */

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
	console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
	console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
	console.log("Mark's BMI is higher than John's.");
} else {
	console.log("John's BMI is higher than Marks's.");
}

//----------------------------------------------------------------------------------------------------------------------------------------------------
/*****************************
 * TOPIC: Boolean logic
 */

var firstName = 'John';
var age = 20;

if (age < 13) {
	console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
	console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
	console.log(firstName + ' is a young man.');
} else {
	console.log(firstName + ' is a man.');
}

//----------------------------------------------------------------------------------------------------------------------------------------------------
/*****************************
 * TOPIC: The Ternary Operator and Switch Statements
 */

var firstName = 'John';
var age = 14;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18) {
	var drink = 'beer';
} else {
	var drink = 'juice';
}

// Switch statement
var job = 'instructor';
switch (job) {
	case 'teacher':
	case 'instructor':
		console.log(firstName + ' teaches kids how to code.');
		break;
	case 'driver':
		console.log(firstName + ' drives an uber in Lisbon.');
		break;
	case 'designer':
		console.log(firstName + ' designs beautiful websites.');
		break;
	default:
		console.log(firstName + ' does something else.');
}

age = 56;
switch (true) {
	case age < 13:
		console.log(firstName + ' is a boy.');
		break;
	case age >= 13 && age < 20:
		console.log(firstName + ' is a teenager.');
		break;
	case age >= 20 && age < 30:
		console.log(firstName + ' is a young man.');
		break;
	default:
		console.log(firstName + ' is a man.');
}

//----------------------------------------------------------------------------------------------------------------------------------------------------
/*****************************
 * TOPIC: Loops and iteration
 */

// for loop
for (var i = 1; i <= 20; i += 2) {
	console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
	console.log(john[i]);
}

// While loop
var i = 0;
while (i < john.length) {
	console.log(john[i]);
	i++;
}

// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
	if (typeof john[i] !== 'string') continue;
	console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
	if (typeof john[i] !== 'string') break;
	console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
	console.log(john[i]);
}
