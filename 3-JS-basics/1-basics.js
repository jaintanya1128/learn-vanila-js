//------------------------------------------------------------------------------------------------------------------------------------------------------
/******************************************
  TOPIC: DATA types
*/
/*
- JavaScript is a dynamic language or loosely typed therefore a variable does not associate with any type, however, its value does.
- In other words, the same variable can hold values of different types at any time.
- In JavaScript, a variable may store two types of data: primitive and reference.

1. Primitive
  - numbers
  - strings
  - booleans
  - undefined
  - null

2. Reference: Object
- every thing else other than primitive values is an objects
  - array
  - function
  - object
  - null
*/
//------------------------------------------------------------------------------------------------------------------------------------------------------
//The undefined type
/*
The undefined type is a primitive type that has one special value 'undefined'.
By default, when a variable is declared but not initialized, it is assigned the value of 'undefined'.
*/
var foo;
console.log(foo); // undefined
console.log(typeof foo); // undefined

//NOTE:
//interviewQuestion: typeof operator also returns 'undefined' when you call it on a variable that has not been defined
console.log(typeof bar); // undefined

function test() {
	console.log(typeof go); //undefined
}
test();

//------------------------------------------------------------------------------------------------------------------------------------------------------
//The null type
//Javascript defines that null is an empty object pointer.
var variable = null;
console.log(typeof variable); // object

//NOTE:
//interviewQuestion: JavaScript defines that null is equal to undefined
console.log(null == undefined); // true, this is bcz double-equal operator forces Javascript to do type coercion,
//hence converting them to have same type as boolean, both results to be falsy values and hence resulted in 'true'. However
console.log(null === undefined); // false, this is bcz the typeof each is different

console.log(typeof null); //object
console.log(typeof undefined); //undefined

//------------------------------------------------------------------------------------------------------------------------------------------------------
//Number Type
/* JavaScript converts a floating-point number into an integer number if the number appears to be the whole number.
The reason is that Javascript always wants to use less the memory since a floating-point value uses twice as much memory as an integer value.
*/
var f3 = 200.0; // interpreted as integer 200

//------------------------------------------------------------------------------------------------------------------------------------------------------
// NaN type
/*
The NaN has two special characteristics:
1. Any operation with NaN returns NaN.
2. The NaN does not equal any value, including itself.

interviewQuestion: Unlike all other possible values in JavaScript, it is not possible to rely on the equality operators (== and ===) to determine
whether a value is NaN or not, because both NaN == NaN and NaN === NaN evaluate to false. Hence, the necessity of an isNaN function.
*/
console.log(NaN / 2); // NaN
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
typeof (0 / 0); //NaN -> Number
typeof (1213 / 0); //Infinity -> Number

//------------------------------------------------------------------------------------------------------------------------------------------------------
//The string type
/*
- JavaScript strings are immutable. It means that you cannot modify a string once it is created.
However, you can create a new string based on an operation on the original string
*/
var foo = "JavaScript";
foo = foo + " String";
//Behind the scene, JavaScript engine creates a new string that holds the new string 'JavaScript String'
//and destroys two other original strings 'JavaScript' and ' String'.

//------------------------------------------------------------------------------------------------------------------------------------------------------
//The boolean type
/*
- JavaScript allows values of other types to be converted into boolean values of true or false.
- falsy values: undefined, null, 0, '', NaN, false
  truthy values: NOT falsy values

Type	         true	                            false
string	   non-empty string	                 empty string
number	   non-zero number and Infinity	     0, NaN
object	   non-null object	                 null
undefined		    -                            undefined
*/
console.log(Boolean("Hi")); // true
console.log(Boolean("")); // false

console.log(Boolean(20)); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false

console.log(
	Boolean({
		foo: 100
	})
); // true on non-empty object
console.log(Boolean({})); //interviewQuestion: true, through it is empty but its non-null object
console.log(Boolean(null)); // false

//======================================================================================================================================================
/*
 * TOPIC: Variable mutation and type coercion
 */
var firstName = "John";
var age = 28;

// Type coercion
console.log(firstName + " " + age + 1); //Jone 281 : Here 28 is converted to string

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(
	firstName +
		" is " +
		age +
		" year old. By profession I'm a " +
		job +
		".Is he married ? " +
		isMarried
);

// Variable mutation
age = "twenty eight";
job = "driver";

alert(
	firstName +
		" is a " +
		age +
		" year old. By profession I'm a " +
		job +
		".Is he married ? " +
		isMarried
);

var lastName = prompt("What is his last Name?");
console.log(firstName + " " + lastName);

//--------Converting Strings to Numbers
Number(" "); // returns 0
Number(""); // returns 0
Number("99 88"); // returns NaN

//The unary + operator can be used to convert a variable to a number:
var y = "5"; // y is a string
var x = +y; //5,  x is a number
//interviewQuestion: If the variable cannot be converted, it will still become a number, but with the value NaN
var y = "5 1"; // y is a string
var x = +y; //NaN

//------------------------------------------------------------------------------------------------------------------------------------------------------
/*
 * TOPIC: JavaScript Type Conversion Table
 */
/*
// This table shows the result of converting different JavaScript values to Number, String, and Boolean:
// value -> Number -> String -> Boolean

false -> 0 -> "false" -> false
true -> 1 -> "true" -> true
0 -> 0 -> "0" -> false
1 -> 1 -> "1" -> true
"1" -> 1 -> "1" -> true
NaN -> NaN -> "NaN" -> false
Infinity -> Infinity -> "Infinity" -> true
-Infinity -> -Infinity -> "-Infinity" -> true
"20" -> 20 -> "20" -> true
"twenty" -> NaN -> "twenty" -> true
[10,20] -> NaN -> "10,20" -> true
["twenty"] -> NaN -> "twenty" -> true
["ten","twenty"] -> NaN -> "ten,twenty" -> true
function(){} -> NaN -> "function(){}" -> true
{ } -> NaN -> "[object Object]" -> true
undefined -> NaN -> "undefined" -> false

//Below are few exceptions for the same, you may expect differently
"0" -> 0 -> "0" -> true
"000" -> 0 -> "000" -> true
"" -> 0 -> "" -> false
[ ] -> 0 -> "" -> true
[20] -> 20 -> "20" -> true
null -> 0 -> "null" -> false
*/

//----------------------------------------------------------------------------------------------------------------------------------------------------
/*
 * TOPIC:  Accessing by value or by reference
 */
/*
- If the variable stores a primitive value, when you manipulate its value, you are working on the actual value stored in the variable.
  In other words, the variable that stores a primitive value is accessed by value.
- Unlike the primitive value, when you manipulate an object, you are working on the reference to that object, rather than the actual object.
  i.e, a variable that stores an object is accessed by reference.

- When you assign a variable that stores a primitive value to another, the value stored in the variable is created and copied into the new variable.
- When you assign a reference value from one variable to another, the value stored in the variable is also copied into the location of the new variable.
  The difference is that the values stored in both variables now are the address of the actual object stored in the heap.
  As a result, both variables are pointing to the same object.
*/

var a = 10;
var b = a;
console.log(b); //10
b = 20;
console.log(a); //10
console.log(b); //20

var x = {
	name: "Tanya Jain"
};
var y = x;
console.log(y.name); // Tanya Jain
y.name = "Tanya Jain Sharma";
console.log(x.name); //Tanya Jain Sharma
console.log(y.name); //Tanya Jain Sharma

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
console.log(typeof "Mark is older tha John");
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

var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
	console.log(firstName + " is married!");
} else {
	console.log(firstName + " will hopefully marry soon :)");
}

var isMarried = true;
if (isMarried) {
	console.log(firstName + " is married!");
} else {
	console.log(firstName + " will hopefully marry soon :)");
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

var firstName = "John";
var age = 20;

if (age < 13) {
	console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {
	console.log(firstName + " is a teenager.");
} else if (age >= 20 && age < 30) {
	console.log(firstName + " is a young man.");
} else {
	console.log(firstName + " is a man.");
}

//----------------------------------------------------------------------------------------------------------------------------------------------------
/*****************************
 * TOPIC: The Ternary Operator and Switch Statements
 */

var firstName = "John";
var age = 14;

// Ternary operator
age >= 18
	? console.log(firstName + " drinks beer.")
	: console.log(firstName + " drinks juice.");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

if (age >= 18) {
	var drink = "beer";
} else {
	var drink = "juice";
}

// Switch statement
var job = "instructor";
switch (job) {
	case "teacher":
	case "instructor":
		console.log(firstName + " teaches kids how to code.");
		break;
	case "driver":
		console.log(firstName + " drives an uber in Lisbon.");
		break;
	case "designer":
		console.log(firstName + " designs beautiful websites.");
		break;
	default:
		console.log(firstName + " does something else.");
}

age = 56;
switch (true) {
	case age < 13:
		console.log(firstName + " is a boy.");
		break;
	case age >= 13 && age < 20:
		console.log(firstName + " is a teenager.");
		break;
	case age >= 20 && age < 30:
		console.log(firstName + " is a young man.");
		break;
	default:
		console.log(firstName + " is a man.");
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

var john = ["John", "Smith", 1990, "designer", false, "blue"];
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
var john = ["John", "Smith", 1990, "designer", false, "blue"];

for (var i = 0; i < john.length; i++) {
	if (typeof john[i] !== "string") continue;
	console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
	if (typeof john[i] !== "string") break;
	console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
	console.log(john[i]);
}
