/*****************************
 *          Functions
 *****************************/

/*****  First Class Function ******/
/*
A programming language is said to have First-class functions when functions in that language are treated like any other variable.
It means that it can be
1. stored in a variable, object, or array
2. passed as an argument to a function
3. returned from a function

Hence, in JavaScript, functions are first-clxass objects, because they can have properties and methods just like any other object.

To summarise:
1. a function definition can be stored in a variable, the function definition is invisible to the program until it gets called.
2. every time a function gets called, a local execution context is (temporarily) created.
3. That execution context vanishes when the function is done.
4. A function is done when it encounters return or the closing bracket }.

1. Storing a function
Functions can be stored in three ways:

store in a variable : let fn = function doSomething() {}
store in an object : let obj = { doSomething : function(){} }
store in an array : arr.push(function doSomething() {})

2. Function as an argument
function sayHello() {
   return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function, this explains how we are treating the function as a value.
greeting(sayHello, "JavaScript!");

NOTE:  A callback is a function passed as an argument to another function. Here sayHello is a Callback function.

3. returned from a function
function sayHello() {
   return function() {
      console.log("Hello!");
   }
}

We can return a function because we treated function in JavaScript as a value.
NOTE: A function that returns a function is called a Higher-Order Function.

we need to invoke sayHello function and it returned an Anonymous Function. To do so, we have two ways:
1- Using a variable
const myFunc = sayHello();
myFunc();

2- Using double parentheses
sayHello()();

*/

/****** Function ******/
/*
- Every function in JavaScript is a Function object.

- Retun value of a function
  - To return a value other than the default, a function must have a return statement that specifies the value to return.
  - A function without a return statement will return a default value.
  - In the case of a constructor called with the 'new' keyword, the default value is the value of its 'this' parameter.
  - For all other functions, the default return value is 'undefined'.

- The parameters of a function call are the function's arguments. The function arguments can be any primitive type or an object.
  - Primitive parameters are passed to functions by value; the value is passed to the function, but if the function changes the value of the parameter,
    this change is not reflected globally or in the calling function.
  - If an object is passed (i.e. a non-primitive value, such as Array or a user-defined object) as a parameter and the function changes
    the object's properties, that change is visible outside the function
*/
var mycar = {make: "Honda", model: "Accord", year: 1998};
var x, y;

x = mycar.make; // x gets the value "Honda"

function myFunc(carObj) {
	carObj.make = "Toyota";
}
myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"

//------------------------------------------------------------------------------------------------------------------------------------------------------
/****** Function Definition ******/
/*
A Function can be defined using several ways as below:
1. function declaration or function statement
2. function expression
3. generator function statement
4. generator function expression
5. arrow function expression
6. function constructor
7. generator function constructor
*/

/*****  Function Statements ******/

function calculateAge(birthYear) {
	return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
	var age = calculateAge(year);
	var retirement = 65 - age;

	if (retirement > 0) {
		console.log(firstName + " retires in " + retirement + " years.");
	} else {
		console.log(firstName + " is already retired.");
	}
}

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1948, "Mike");
yearsUntilRetirement(1969, "Jane");

//Function declaration hoisting:
//Function declarations in JavaScript are hoisted to the top of the enclosing function or global scope.
//You can use the function before you declared it.
hoisted(); // logs "foo"

function hoisted() {
	console.log("foo");
}

//------------------------------------------------------------------------------------------------------------------------------------------------------
/***** Function Expressions  ******/
/*
 - A function expression may be a part of a larger expression.
 - They can be "named" function expressions or "anonymous" function expressions.
*/
//anonymous
var myFunction = function() {
	statements;
};
//namedFunction
var myFunction = function namedFunction() {
	statements;
};

/*
 - The benifit of the named function is that, in case of error, the stack trace will contain its name and can be identified.
 - other benefit of named function expression is, when its needed to refer to the current function inside the function body.
  The name is then local only to the function body (scope). This also avoids using the non-standard arguments.callee property.
*/
var math = {
	factit: function factorial(n) {
		console.log(n);
		if (n <= 1) {
			return 1;
		}
		return n * factorial(n - 1);
	}
};
math.factit(3);

//NOTE: Function expressions are not hoisted.
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {
	console.log("bar");
};

//example:
var whatDoYouDo = function(job, firstName) {
	switch (job) {
		case "teacher":
			return firstName + " teaches kids how to code";
		case "driver":
			return firstName + " drives a cab in Lisbon.";
		case "designer":
			return firstName + " designs beautiful websites";
		default:
			return firstName + " does something else";
	}
};

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Jane"));
console.log(whatDoYouDo("retired", "Mark"));
//------------------------------------------------------------------------------------------------------------------------------------------------------
/**** Function Name Property  ****/
//The variable, the function expression is assigned to, will have a 'name' property.
//If function name is omitted, it will be the variable name (implicit name).
var foo = function() {};
foo.name; // "foo"

//If function name is present, it will be the function name (explicit name).
var bar = function baz() {};
bar.name; // "baz"

//The name doesn't change if it's assigned to a different variable.
var foo2 = foo;
foo2.name; // "foo"
OR;
var bar1 = bar1;
bar1.name; // "baz"

//------------------------------------------------------------------------------------------------------------------------------------------------------
/***** IIFE   ****/
/*IIFE are function expressions that are invoked as soon as the function is declared.

WHy is it called IIFE?
immediately invoked:  since these functions are executed as soon as they are mounted to the stack, it requires no explicit call to invoke the function.
There are two set of parentheses
1. (fun(){ //logic }) - Here all the logic comes in
2. () - this tells the compiler that the function expression has to be executed immediately.
*/

(function() {
	// Function Logic Here.
})();

// Regular Function.
function Greet() {
	console.log("Welcome to India!");
}
// Execution of Regular Function.
Greet();

// IIFE creation and execution.
(function() {
	console.log("Welcome to India!");
})();

//interviewQuestion:
// IIFE follow their own scope like any other function/variable in JavaScript i.e They are only invoked when the parent scope is executed
function myFunc() {
	console.log("Welcome to");
	// This will be executed after executing the previous log in execution stack.
	//i.e. It will never be executed if the parent function is not executed
	(function() {
		console.log("India!");
	})();
	console.log("Hi There!");
}
//It does not mean that if an IIFE is present, it has to be executed all the time.
// Calling the Function, this will invoke the parent function execution of IIFE and hence IIFE will be executed.
myFunc();

//IIFEs can also have parameters.
// Declaring the parameter required.
(function(dt) {
	console.log(dt.toLocaleTimeString());
	// Passing the Parameter.
})(new Date());

//------------------------------------------------------------------------------------------------------------------------------------------------------
/***** Function Constructor *****/
/*
Note: Using the Function constructor to create functions is not recommended since it needs the function body as a string
      which may prevent some JS engine optimizations and can also cause other problems.

- As all other objects, Function objects can be created using the new operator

var myFunction = new Function("a", "b", "return a + b");
var x = myFunction(4, 3);

-This is less efficient than declaring a function with a function expression or function statement and calling it within your code
  because such functions are parsed with the rest of the code.
*/

/***** Difference: function constructor vs function declarations vs function expression ******/
//function constructor
var multiply = new Function("a", "b", "return a*b");

//function declaration
function multiply(a, b) {
	return a * b;
}

//anonymous function expression
var multiply = function(a, b) {
	return a * b;
};

//named function expression
var multiply = function fun_name(a, b) {
	return a * b;
};
/*
1. The function name (via function declaration) cannot be changed, while the variable the function is assigned to (created via function expression or function constructor) can be reassigned.

2. The function name can be used only within the function's body, while the variable the function is assigned to is limited by its scope

3. variable name can be different from the function name and are not related to each other.
  While A function declaration also creates a variable with the same name as the function name.

4. Unlike functions defined by function expressions or by the Function constructor,
  a function defined by a function declaration can be used before the function declaration itself. i.e. due to hoisting

5. A function defined by a function expression or by a function declaration inherits the current scope. That is, the function forms a closure.
  On the other hand, a function defined by a Function constructor does not inherit any scope other than the global scope (which all functions inherit).
*/
var p = 10;
function myFunc() {
	var p = 5;
	function dec() {
		console.log(p);
	}
	var exp = function() {
		console.log(p);
	};

	var con = new Function("console.log(p)");

	dec();
	exp();
	con();
}
myFunc();

/***** Function declaration turns into Function expression  *****/
/*
- A function declaration ceases to be one when it either:
  1. becomes part of an expression
  2. is no longer a "source element" of a function or the script itself.
      A "source element" is a non-nested statement in the script or a function body.

// function declaration
function hello() {}

// function expression
(function hello() {})

// function expression
x = function hello() {}

if (x) {
   // function expression
   function hello() {}
}

// function declaration
function a() {    // source element
   // function declaration
   function b() {}  // source element
   if (0) {
      // function expression
      function c() {}   // not a source element
   }
}

/********* NOTES *********/
/*
- A function defined as the property of an object, is called a method to the object.
- A function designed to create new objects, is called an object constructor.
- Functions created with the Function constructor do not create closures to their creation contexts; they always are created in the global scope.
  When running them, they will only be able to access their own local variables and global ones, not the ones from the scope in which the Function constructor was created.
*/

//-------------------------------------------------------------------------------------------------------------------------
/********* Function Scope *********/
/*
 - Variables defined inside a function cannot be accessed from anywhere outside the function,
    because the variable is defined only in the scope of the function.

 - A function can access all variables and functions defined inside the scope in which it is defined.

 - A function defined inside another function can also access all variables defined in its parent function
    and any other variable to which the parent function has access.
*/

// The following variables are defined in the global scope
var num1 = 20,
	num2 = 3,
	name = "Tanya";

// This function is defined in the global scope
function multiply() {
	return num1 * num2;
}

multiply(); // Returns 60

// A nested function example defined in global scope
function getScore() {
	var num1 = 20, //defined in local scope
		num2 = 30;

	//defined in local scope, however add() will have access to its parent variables n also to those that the parent function have access to.
	function add() {
		return name + " scored " + (num1 + num2); //name is accessable here
	}

	return add();
}

getScore();

//-----------------------------------------------------------------------------------------------------------------------------------------------------
/********* Function Recursion Section *********/
/*
A function can refer to and call itself. There are three ways for a function to refer to itself:
1. the function's name
2. arguments.callee
3. an in-scope variable that refers to the function
*/
var foo = function bar() {
	// statements go here
};

/*
Within the function body, the following are all equivalent:

bar()
arguments.callee()
foo()
*/
