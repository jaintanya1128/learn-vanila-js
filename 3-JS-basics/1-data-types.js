//------------------------------------------------------------------------------------------------------------------------------------------------------
/******************************************
  TOPIC: DATA types
*****************************************/
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
var foo = 'JavaScript';
foo = foo + ' String';
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
console.log(Boolean('Hi')); // true
console.log(Boolean('')); // false

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

//Interview Question 1
if (userName) {
	logIn(userName);
} else {
	signUp();
}
//this can be written as below
(userName && logIn(userName)) || signUp();

//Explanation:
/*
 1. The || operator first evaluates the expression on the left, if it is truthy, it returns that value. 
    If it is falsy, it evaluates and returns the value of the right operand (the expression on the right).

 2. The && operator first evaluates the expression on the left. If it is falsy, false is returned; it does not bother to evaluate the right operand.
//======================================================================================================================================================
/*
 * TOPIC: Variable mutation and type coercion
 */
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age + 1); //Jone 281 : Here 28 is converted to string

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is ' + age + " year old. By profession I'm a " + job + '.Is he married ? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + " year old. By profession I'm a " + job + '.Is he married ? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);

//--------Converting Strings to Numbers
Number(' '); // returns 0
Number(''); // returns 0
Number('99 88'); // returns NaN

//The unary + operator can be used to convert a variable to a number:
var y = '5'; // y is a string
var x = +y; //5,  x is a number
//interviewQuestion: If the variable cannot be converted, it will still become a number, but with the value NaN
var y = '5 1'; // y is a string
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

DIFFERENCE between Primitives n Object:
So a big difference between primitives and objects is that variables containing primitives actually hold that data inside of the variable itself.
On objects it's very different. Variables associated with objects do not actually contain the object, but instead they contain a reference
  to the place in memory where the object sits, so where the object is stored.
So again a variable declared as an object does not have a real copy of the object it just points to that object.


  */

var a = 10;
var b = a;
console.log(b); //10
b = 20;
console.log(a); //10
console.log(b); //20

var x = {
	name: 'Tanya Jain'
};
var y = x;
console.log(y.name); // Tanya Jain
y.name = 'Tanya Jain Sharma';
console.log(x.name); //Tanya Jain Sharma
console.log(y.name); //Tanya Jain Sharma
