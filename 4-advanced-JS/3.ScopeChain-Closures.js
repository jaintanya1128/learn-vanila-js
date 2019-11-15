/********* Nested functions *********/
/*
- The inner function can be accessed only from statements in the outer function.
- The inner function forms a closure:
    the inner function can use the arguments and variables of the outer function,
    while the outer function cannot use the arguments and variables of the inner function.
*/

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

//-------------------------------------------------------------------------------------------------------------------------
/********* Scope chaining *********/
/*
Functions can be multilevel-nested, i.e. a function (A) containing a function (B) containing a function (C).
Both functions B and C form closures here, so B can access A and C can access B.
In addition, since C can access B which can access A, C can also access A.
Thus, the closures can contain multiple scopes; they recursively contain the scope of the functions containing it.
This is called scope chaining.
*/

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
inner_fn = outside();
result = inner_fn(10);
outside()(10); // returns 20 instead of 10

//-------------------------------------------------------------------------------------------------------------------------
/************ Closures  **************/
/*
An inner functions always have access to the variables and parameters of its outter function, even if the outter function has returned
NOTE: The new function gets a new execution context and each execution context has and object which stores variables.
The scope chain is in fact a pointer to variable objects that the function has access to.
The scope chain always stays intact and hence we can access the variables even the function execution context is gone and hence the closure.
*/

function retirement(retirementAge) {
	var a = " years left until retirement.";
	return function(yearOfBirth) {
		var age = 2016 - yearOfBirth;
		console.log(retirementAge - age + a);
	};
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

//retirement(66)(1990);

function interviewQuestion(job) {
	return function(name) {
		if (job === "designer") {
			console.log(name + ", can you please explain what UX design is?");
		} else if (job === "teacher") {
			console.log("What subject do you teach, " + name + "?");
		} else {
			console.log("Hello " + name + ", what do you do?");
		}
	};
}

interviewQuestion("teacher")("John");
