//what is the pitfall with using typeof bar === "object" to determine if bar is an object?
//gotcha in JavaScript is that null is also considered an object!

var bar = null;
console.log(typeof bar === "object"); // logs true!
//Therefore, check for null explicitly
console.log((bar !== null) && (typeof bar === "object")); //logs false!

//Hence, best way is to return false for nulls, arrays, and functions, but true for objects:
console.log((bar !== null) && (bar.constructor === Object));


//--------------------------------------------------------------------
var myObject = {
  foo: "bar",
  func: function() {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo); //this = myObject as function call is associated to the object that invoked it.
    console.log("outer func:  self.foo = " + self.foo); //self = myObject hence self.foo = bar
    (function() {
      console.log("inner func:  this.foo = " + this.foo); //here this = windows as function call is IIFE, hence global scope, hence this = windows and this.foo is undefined as here it will try to add 'foo' property to windows object
      console.log("inner func:  self.foo = " + self.foo); //self forms Closures and hence is accessible
    }());
  }
};
myObject.func();

//--------------------------------------------------------------------
//What will be the out in both cases?
function foo1() {
  return {
    bar: "hello"
  };
}

function foo2() {
  return

  {
    bar: "hello"
  };
}

foo1();
foo2();
//Ans: Different in both cases as foo1() will return the object  and foo2() will return 'undefined'.
//This is because every statement is terminated with a semicolon in JS and semicolon after return statement will give undefined and any code after that is never executed

//--------------------------------------------------------------------
// isNaN(x) is always the same as isNaN(Number(x)),
// but the presence of x is mandatory here!
isNaN(x) == isNaN(Number(x)); // true for every value of x, including x == undefined,
// because isNaN(undefined) == true and Number(undefined) returns NaN,
// but ...
isNaN() == isNaN(Number()); // false, because isNaN() == true and Number() == 0





const object = {
  who: 'World',
  greet() {
    return `Hello, ${this.who}!`;
  },

  farewell: () => {
    return `Goodbye, ${this.who}!`;
  }
};

const object2 = {
  who: 'India',
}

console.log(object.greet());   
console.log(object.farewell()); 
const c = object.greet;
console.log(c());
const d = object.farewell;
console.log(d());
const m = object.farewell.call(object2);
console.log(m)
const n = object.greet.bind(object2);
console.log(n())