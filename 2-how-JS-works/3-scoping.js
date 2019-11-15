/////////////////////////////////////
// Lecture: Scoping

// First scoping example
var a = "Hello!";
first();

function first() {
	var b = "Hi!";
	second();

	function second() {
		var c = "Hey!";
		console.log(a + b + c);
	}
}

// Example to show the differece between execution stack and scope chain
var a = "Hello!";
first();

function first() {
	var b = "Hi!";
	second();

	function second() {
		var c = "Hey!";
		third();
	}
}

function third() {
	var d = "John";
	//console.log(c);
	console.log(a + d);
}

/***   lexical scope ***/
//One intricacy of JavaScript is how it looks for variables. If it can’t find a variable in its local execution context, it will look for it in its calling context. And if not found there in its calling context. Repeatedly, until it is looking in the global execution context. (And if it does not find it there, it’s undefined).
//remember that a function has access to variables that are defined in its calling context. The formal name of this phenomenon is the lexical scope.
