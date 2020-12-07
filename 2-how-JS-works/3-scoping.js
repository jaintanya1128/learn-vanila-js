//------------------------------------------------------------------------------------------------------------------------------------------------------
/******************************************
  TOPIC: Scopes
*****************************************/
//https://www.freecodecamp.org/news/deep-dive-into-scope-chains-and-closures-21ee18b71dd9/

/*
Scope in JavaScript refers to the accessibility or visibility of variables ie, parts of a program which have access to the variable or where the variable is visible.

Why is Scope Important?
	1.The main benefit of scope is security. That is, the variables can be accessed from only a certain area of the program. 
		Using scope, we can avoid unintended modifications to the variables from other parts of the program.
	2.The scope also reduces the namespace collisions. That is, we can use the same variable names in different scopes.
*/

/* There are three types of scope in JavaScript — 
	1) Global Scope, 
	2) Function Scope, 
	3) Block Scope.
*/

// First scoping example
var a = 'Hello!';
first();

function first() {
	var b = 'Hi!';
	second();

	function second() {
		var c = 'Hey!';
		console.log(a + b + c);
	}
}

/************* Example to show the difference between execution stack and scope chain ********************/

var a = 'Hello!'; //global scope
first(); //in global scope | creates a new execution context in global execution context

function first() {
	var b = 'Hi!'; //local scope for first() function
	second(); //local scope for first() function | creates a new execution context within function execution context of first()

	function second() {
		var c = 'Hey!'; //local scope for second() function
		third(); //able to reference it from global execution context up the scope chain | creates a new execution context within function execution context of second()
	}
}

function third() {
	var d = 'John'; //local scope for third() function
	//console.log(c); // will not be able to access 'c' as it is not in its scope chain
	console.log(a + d); //able to access 'a' from the global execution context up the scope chain
}

//------------------------------------------------------------------------------------------------------------------------------------------------------
/******************************************
  TOPIC: Nested Scope
*****************************************/
//Just like functions in JavaScript, a scope can be nested inside another scope.
var name = 'Peter';
function greet() {
	var greeting = 'Hello';
	{
		let lang = 'English';
		console.log(`${lang}: ${greeting} ${name}`);
	}
}
greet();

//Here we have 3 scopes nested within each other
/* First, the block scope (created due to the let variable) is nested inside the local or function scope which is in turn nested inside the global scope. */
//------------------------------------------------------------------------------------------------------------------------------------------------------
/******************************************
  TOPIC: Lexical Scope
*****************************************/
//One intricacy of JavaScript is how it looks for variables. If it can’t find a variable in its local execution context, it will look for it in its calling context.
//And if not found there in its calling context. Repeatedly, until it is looking in the global execution context.
//(And if it does not find it there, it’s undefined).
//remember that a function has access to variables that are defined in its calling context. The formal name of this phenomenon is the lexical scope.

//------------------------------------------------------------------------------------------------------------------------------------------------------
/******************************************
  TOPIC: Lexical Scope
*****************************************/
