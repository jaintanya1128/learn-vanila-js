/******************************************
  TOPIC: Arrays
*/
/*
 - In JavaScript, an array is an ordered list of data.
 - special characteristics
    1. an array can hold data of the different types in each slot
    2. the length of an array is dynamically sized and auto-growing.

 - JavaScript provides you with two ways to create an array.
  1. Array constructor
  2. the array literal notation

 - The first element of the array start with 0, the second element starts with 1, and so on.
 - The array uses the length property to store the current number of elements it holds
 - the typeof of an array variable returns object
*/

//Array constructor
var scores = new Array(); // array is empty
var scores = new Array(9, 10, 8, 7, 6); //array with initial elements

//NOTE:
//if an array is created using a constructor and passing multiple numbers as arguments, then array is created with those as elements
var scores = new Array(1, 2, 3); // create an array with three numbers 1,2 3

//interviewQuestion: NOTE
//However, if only one number is passed, then the array is created with its initial size equal to number passed
var athletes = new Array(3); // creates an array with initial size 3
console.log(athletes.length); //3

//Still, if any other data type is used and only one parameter is passed, then it is considered as the element
var signs = new Array("Red"); // creates an array with one element 'Red'

//JavaScript allows you to omit the new operator when you use the array constructor.
var artists = Array();

//The array literal notation
var array_name = [element1, element2, element3];
var colors = ["red", "green", "blue"];
var emptyArray = [];
var nonEmptyArry = [, ,];
console.log(nonEmptyArray); // [undefined, undefined]

//------------------------------------------------------------------------------------------------------------------------------------------------------
//interviewQuestion: NOTE: The length property is writable therefore you can insert or delete elements by changing the value of the length property.
var mountains = ["Everest", "Fuji", "K2"];
console.log(mountains.length); // 3

// append 1 element
mountains.length = 4;
console.log(mountains[3]); // undefined

// remove the last 2 elements
mountains.length = 2;
console.log(mountains[2]); // undefined

//------------------------------------------------------------------------------------------------------------------------------------------------------
/*
 * Basic operations on arrays
 */

var seas = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
console.log(typeof seas); // object

//if the object is an array or not
console.log(Array.isArray(seas)); // true

//string representaion of array
console.log(seas.toString()); // Black Sea,Caribbean Sea,North Sea,Baltic Sea
console.log(seas.valueOf()); // (4) ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"]
//valueOf() returns the  primitive value of the any specified object

//to get string representation of an array differently
console.log(seas.join("|")); // Black Sea|Caribbean Sea|North Sea|Baltic Sea

//interviewQuestion
//If an element of the array is null or undefined, the toString(), valueOf(), and join() will treats it as an empty string in the resulting string.
var mixedValues = [1, 2, null, "A", undefined, 3];
console.log(mixedValues.toString()); // 1,2,,A,,3

// Initialize new array
var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = "Ben";
names[names.length] = "Mary";
console.log(names);

// Different data types
var john = ["John", "Smith", 1990, "designer", false];

//push(): Add a new item to an array and returns the new length. The iteam will be added to the end of the array.
john.push("blue");

//The unshift() method adds new items to the beginning of an array, and returns the new length.
john.unshift("Mr.");
console.log(john);

//pop(): Remove the last element of an array and returns it.
john.pop();
john.pop();
john.shift(); //remove from the starting point
console.log(john);

//indexOf()
console.log(john.indexOf(23));

var isDesigner =
	john.indexOf("designer") === -1
		? "John is NOT a designer"
		: "John IS a designer";
console.log(isDesigner);
//------------------------------------------------------------------------------------------------------------------------------------------------------

//The splice() method adds/removes items to/from an array, and returns the newly created array.
//syntax: array.splice(index, howmanyToremove, item1, ....., itemX)
//Return Value:	A new Array, containing the removed items (if any)

//to add two elements to an array at position 2 without removing any element
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits); //(6)["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]

//to remove two elements from the array starting from position 2
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 2); //(2) ["Apple", "Mango"]
console.log(fruits); //(3) ["Banana", "Orange", "Kiwi"]

//------------------------------------------------------------------------------------------------------------------------------------------------------
//JavaScript Array type provides the push() and pop() methods that allow you to use an array as a stack.

// push() method
/*
  - The push() method allows you to add one or more elements to the end of the array.
  - The push() method returns the value of the length property that specifies the number of elements in the array.
*/
var stack = [];

stack.push(1);
console.log(stack); // [1]

stack.push(2);
console.log(stack); // [1,2]

stack.push(3);
console.log(stack); // [1,2,3]

stack.push(4);
console.log(stack); // [1,2,3,4]

stack.push(5);
console.log(stack); // [1,2,3,4,5]

//pop() method
/*
  The pop() method removes the element at the end of the array and returns the element to the caller.
  If the array is empty, the pop() method returns undefined.
*/

console.log(stack.pop()); //  5
console.log(stack); // [1,2,3,4];

console.log(stack.pop()); //  4
console.log(stack); // [1,2,3];

console.log(stack.pop()); //  3
console.log(stack); // [1,2];

console.log(stack.pop()); //  2
console.log(stack); // [1];

console.log(stack.pop()); //  1
console.log(stack); // []; -> empty

console.log(stack.pop()); //  undefined

//------------------------------------------------------------------------------------------------------------------------------------------------------
// JavaScript Array type provides the push() and shift() methods that allow you to use an array as a queue.

/*
- A queue is an ordered list of elements where an element is inserted at the end of the queue and is removed from the front of the queue.
- A queue works based on the first-in, first-out (FIFO) principle

- A queue has two main operations involving inserting a new element and removing an existing element.
- The insertion operation is called enqueue, and the removal operation is called dequeue.
- The enqueue operation inserts an element at the end of the queue.
- The dequeue operation removes an element from the front of a queue.
- Another operation in a queue is getting the element at the front called peek.
  Different from the dequeue operation, the peek operation just returns the element at the front without modifying the queue.
*/

//Implementing a JavaScript queue using an array
/*
Add an element at the end of the array using the push() method. This method is equivalent to the enqueue operation.
Remove an element from the front of an array using the shift() method. It is the same as dequeue operation.
*/
