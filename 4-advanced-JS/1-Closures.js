//------------------------------------------------------------------------------------------------------------------------------------------------------
/******************************************
  TOPIC: Closures
*****************************************/
/*
- function can be executed in complete different scope from where it is declared
- A closure is an inner function that has access to the outer (enclosing) function's variables
- The closure has 3 scopes, all part of the same chain (also known as lexical environment): 
	1. own scope (variables defined between its curly brackets), 
	2. outer function's variables
	3. global variables
- The inner function has access not only to the outer function’s variables, but also to the outer function's parameters. 
	Note that the inner function cannot call the outer function’s arguments object

NOTE: When functions in JavaScript execute, they use the same scope chain that was in effect when they were created. 
The scope chain is in fact a pointer to variable objects that the function has access to.
The scope chain always stays intact and hence we can access the variables even the function execution context is gone.
*/

var a = 10;

function outer() {
	var b = 20;
	function inner() {
		console.log(a);
		console.log(b);
	}
	inner(); //it is not necessary for a function to be called where it is declared.
	console.dir(inner); //Here 'inner' forms a closure scope and can be seen, with variable 'b'
}

outer();
//output:
//10
//20

var a = 10;
function outer() {
	var b = 20;
	var inner = function() {
		console.log(a);
		console.log(b);
	};
	return inner;
}

var innerFn = outer();
innerFn();
//output:
//10
//20
console.dir(innerFn); //you can check for the scopes that are created.

// it is same as before. this is because in JS whenever a scope chain is created for a function (be it declaration or expression),
// it remembers where it is declared and what is its scope information ie everything this function is using with all its values.

//------------------------------------------------------------------------------------------------------------------------------------------------------
// CONCEPT 2. Closures can also be formed with function expression:
function sandwichMaker(magicIngredient) {
	return function(filling) {
		return magicIngredient + ' and ' + filling;
	};
}

//------------------------------------------------------------------------------------------------------------------------------------------------------
// CONCEPT 3. Closures store references to the outer function’s variables; they do not store the actual value.
function celebrityID() {
	var celebrityID = 999;
	// We are returning an object with some inner functions
	return {
		getID: function() {
			return celebrityID;
		},
		setID: function(theNewID) {
			celebrityID = theNewID;
		}
	};
}
var obj = celebrityID(); // At this point, the celebrityID outer function has returned.
obj.getID(); // 999
obj.setID(567); // Changes the outer function's variable
obj.getID(); //567

//------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------
//Name conflicts
/*
When two arguments or variables in the scopes of a closure have the same name, there is a name conflict.
More inner scopes take precedence, so the inner-most scope takes the highest precedence, while the outer-most scope takes the lowest.
*/

function outside() {
	var x = 5;

	function inside(x) {
		return x * 2;
	}
	return inside;
}
var inner_fn = outside();
var result = inner_fn(10);
outside()(10); // returns 20 instead of 10
//------------------------------------------------------------------------------------------------------------------------------------------------------
//interviewQuestion
function addSquares(a, b) {
	function square(x) {
		return x * x;
	}
	return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13

function outside(x) {
	function inside(y) {
		return x + y;
	}
	return inside; //returns the function itself
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give

result = fn_inside(5); // returns 8
//OR
result1 = outside(3)(5); // returns 8

//------------------------------------------------------------------------------------------------------------------------------------------------------
/******************************************
  TOPIC: Closures in Callbacks
*****************************************/
var a = 10;
var fn = function() {
	console.log(a);
};
setTimeout(fn, 4000);
console.log('Done');

//Due to the asynchronous nature of JS, Done is printed first and then waits for 4 sec and then prints the value of 'a'

//------------------------------------------------------------------------------------------------------------------------------------------------------
/******************************************
  TOPIC: Modular Pattern using Closures
*****************************************/
var person = {
	firstName: 'tanya',
	lastName: 'jain',
	getFirstName: function() {
		return this.firstName;
	},
	getLastName: function() {
		return this.lastName;
	}
};

//person is an object with few properties, now in JS we do not have private or public keywords to prevent the access to variables, hence we can use closures to achieve the same:

function createPerson() {
	var firstName = 'tanya';
	var lastName = 'jain';
	var returnObj = {
		getFirstName: function() {
			return firstName;
		},
		getLastName: function() {
			return lastName;
		},
		setFirstName: function(name) {
			firstName = name;
		},
		setLastName: function(name) {
			lastName = name;
		}
	};
	return returnObj;
}
var person = createPerson();
console.log(person.firstName); //undefined  //bcz now its not a property on the returnedObj
console.log(person.lastName); //undefined  //bcz now its not a property on the returnedObj
console.log(person.getFirstName()); //tanya  //bcz of closures, fun have remembered the values from its parent scope
console.log(person.getLastName()); //jain    //bcz of closures, fun have remembered the values from its parent scope

//here we are using setters for updating the same variables 'firstName' and  'lastName'
console.log(person.setFirstName('Tanya')); //tanya  //bcz of closures, fun have remembered the values from its parent scope
console.log(person.setLastName('Sharma'));
console.log(person.getFirstName()); //Tanya
console.log(person.getLastName()); //Sharma

//------------------------------------------------------------------------------------------------------------------------------------------------------
/***********************************************************************************
  TOPIC: Closures in Async Callbacks | The side effect in Closures and its solution 
*************************************************************************************/
//NOTE: The closure variable points to the same variable and hence can be updated as well.
//ALSO Any variable declared in a function is created every time the function is called

var i;
for (i = 0; i < 10; i++) {
	console.log(i);
}
//this will print 0 to 9 but now in case we want to use a async function, say setTimeout to get the same result
var i;
var print = function() {
	console.log(i);
};
for (i = 0; i < 10; i++) {
	setTimeout(print, 1000);
}
//now we do not get the same result but the value 10 is printed 10times
//same result even with IIFE,
for (var i = 0; i < 10; i++) {
	(function() {
		setTimeout(function() {
			console.log(i);
		}, 1000);
	})();
}

//now since IIFE has created a new scope, we can use the power of closure to get the desired results.
//just pass in the variable to create new variable for each instance of anonymous functions which will hold the new value of i each time.
for (var i = 0; i < 10; i++) {
	(function(j) {
		setTimeout(function() {
			console.log(j);
		}, 1000);
	})(i);
}

//------------------------------------------------------------------------------------------------------------------------------------------------------
/******************************************
  TOPIC: Examples 
*****************************************/
//Ex1: Log the numbers 1 to 10 in the console with one second intervals using a loop
for (var i = 0; i < 10; i++) {
	(function(j) {
		setTimeout(function() {
			console.log(j);
		}, 1000);
	})(i);
}

//Ex2:
function sandwichMaker(magicIngredient) {
	function make(filling) {
		return magicIngredient + ' and ' + filling;
	}
	return make;
}
var sm = sandwichMaker('peanut butter');
sm('jelly'); //"peanut butter and jelly"
sm('banana'); // "peanut butter and bananas"
sm('marshmallows'); // "peanut butter and marshmallows"
