//------------------------------------------------------------------------------------------------------------------------------------------------------
/******************************************
  TOPIC: 'this' referencing | Binding
*****************************************/
/**
 * 1. Implicit Binding
 * 2. Explicit Binding
 * 3. The new binding
 * 4. The window binding
 * 5. The Lexical Binding
 */

/************* 1. Implicit Binding **********************/
//Rule: Look at the left of the Dot at Call Time

//ex1:
var sayName = function(name) {
	console.log('Hello !, ' + name);
};
sayName('Tanya'); // Hello! Tanya

//ex2:
var me = {
	name: 'tanya',
	age: 20,
	sayName: function() {
		console.log('Hello !, ' + this.name);
	}
};
me.sayName(); // Hello! tanya

//ex3:
var sayNameMixin = function(obj) {
	obj.sayName = function() {
		console.log('Hello!, ' + this.name);
	};
};
var me1 = {
	name: 'tanu',
	age: 10
};
var you = {
	name: 'saurabh',
	age: 20
};
sayNameMixin(me1);
sayNameMixin(you);

me1.sayName();
you.sayName();

// ex4:
var Person = function(name, age) {
	return {
		name: name,
		age: age,
		sayName: function() {
			console.log(this.name);
		},
		husband: {
			name: 'Saurabh',
			sayName: function() {
				console.log(this.name + ', you r a lovely husband');
			}
		}
	};
};

var tanya = Person('tanya', 12); //factory pattern
tanya.sayName(); //tanya
tanya.husband.sayName(); //Saurabh, you r a lovely husband | it will always refer to what is to the left of the Dot
//in case name is not present in husband obj then this.name will be undefined as 'this' refers to husband obj which does not contains 'name' property.

/*************  2. Explicit Binding  **********************/
/*
  CALL: Function Borrowing is the main concept, as it allows us to borrow a function from one object and call it on the other.
	The call method allows us to set the 'this' variable here in the first argument, 
	and all the other variables later separated via comma are just the arguments if needed to be passed.

  APPLY: There is a very similar method call method, the only difference is that this one accepts the arguments as an array,
    so there are only two arguments, first 'this' variable, and other an array where all the other arguments needed.

  BIND: It is very similar to the call method as well, it also allows us to set 'this' variable explicitly.
		However, the difference here is that bind doesn't immediately invokes the function, but instead it returns a copy of the function, which can be used to invoke the bounded function later in time.
*/

var sayIntro = function(lang1, lang2, lang3) {
	console.log(`My name is ${this.name}. I'm a ${this.profession}. I know ${lang1}, ${lang2} and ${lang3}`);
};
var candidate = {
	name: 'Tanya Jain',
	profession: 'Software Engineer'
};
//call
sayIntro.call(candidate, 'JavaScript', 'jQuery', 'React');

//apply
var languages = ['JavaScript', 'jQuery', 'React'];
sayIntro.apply(candidate, languages);

//bind
var boundedFunc = sayIntro.bind(candidate, 'JavaScript', 'jQuery', 'React');
boundedFunc();

// ex2:
var john = {
	name: 'John',
	age: 26,
	job: 'teacher',
	presentation: function(style, timeOfDay) {
		if (style === 'formal') {
			console.log('Good ' + timeOfDay + ", Ladies and gentlemen! I'm " + this.name + ", I'm a " + this.job + " and I'm " + this.age + ' years old.');
		} else if (style === 'friendly') {
			console.log("Hey! What's up? I'm " + this.name + ", I'm a " + this.job + " and I'm " + this.age + ' years old. Have a nice ' + timeOfDay + '.');
		}
	}
};

var emily = {
	name: 'Emily',
	age: 35,
	job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

//ex3:
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

/************* 3. The 'new' binding **********************/
/***
 * the JavaScript interpreter will create a brand new object for you and call it this.
 * So, naturally, if a function was called with new, the this keyword is referencing that new object that the interpreter created.
 */
/************* 4. The window binding **********************/

/************* 5. The Lexical Binding **********************/
/*
 * Unlike normal functions, arrow functions don’t have their own this. Instead, this is determined lexically,
 * i.e. 'this' is determined following the normal variable lookup rules
 */
