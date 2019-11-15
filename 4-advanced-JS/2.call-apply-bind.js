/////////////////////////////
// Lecture: Bind, call and apply
/*
  CALL: Function Borrowing is the main concept, as it allows us to borrow a function from one object and call it on the other.
  the call method allows us to set the 'this' variable here in the first argument, and all the other variales later seperated via comma.

  APPLY: There is a very similar method which is called the apply method, and the only difference is that this one accepts the arguments as an array,
    so there are only two arguments, first 'this' variable, and other an array where all the other arguments go.

  BIND: It is very similar to the call method as well, it also allows us to set 'this' variable explicitly.
    However, the difference here is that bind doesn't immediately call the function, but instead it generates a copy of the function so that we can store it somewhere.
*/

var john = {
	name: "John",
	age: 26,
	job: "teacher",
	presentation: function(style, timeOfDay) {
		if (style === "formal") {
			console.log(
				"Good " +
					timeOfDay +
					", Ladies and gentlemen! I'm " +
					this.name +
					", I'm a " +
					this.job +
					" and I'm " +
					this.age +
					" years old."
			);
		} else if (style === "friendly") {
			console.log(
				"Hey! What's up? I'm " +
					this.name +
					", I'm a " +
					this.job +
					" and I'm " +
					this.age +
					" years old. Have a nice " +
					timeOfDay +
					"."
			);
		}
	}
};

var emily = {
	name: "Emily",
	age: 35,
	job: "designer"
};

john.presentation("formal", "morning");

john.presentation.call(emily, "friendly", "afternoon");

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, "friendly");

johnFriendly("morning");
johnFriendly("night");

var emilyFormal = john.presentation.bind(emily, "formal");
emilyFormal("afternoon");

//So carrying is just a technique in which we create a function based on another function, but with some preset parameters. This is exactly what we did here.

// Another cool example
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for (var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el) {
	return 2016 - el;
}

function isFullAge(limit, el) {
	return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
