/////////////////////////////////////
// Lecture: The this keyword

/* Rules:
1. In regular functions: 'this' keyword points at the global object i.e. window in browsers.
2. Method call : 'this' variable points to the object that is calling the method.
3. 'this' keyword is not assigned a value untill the function where it is defined is actually called.
*/

console.log(this); //window

//global execution content, hence this is window
calculateAge(1985);

function calculateAge(year) {
	console.log(2016 - year);
	console.log(this);
}

//Now with Objects
var john = {
	name: "John",
	yearOfBirth: 1990,
	calculateAge: function() {
		console.log(this); //'this' refers to the Object, since calculateAge is a method of the object
		console.log(2016 - this.yearOfBirth);

		function innerFunction() {
			console.log(this); // this here will be window, since this is just the regular function and not the method.
		}
		innerFunction();
	}
};

john.calculateAge();

var mike = {
	name: "Mike",
	yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
