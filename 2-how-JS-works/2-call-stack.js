//------------------------------------------------------------------------------------------------------------------------------------------------------
/******************************************
  TOPIC: Call Stack
*****************************************/
/*
 - Every Javascript execution environment has a call stack and that is used to track function invocation.
 - it is LIFO, Last in first out 
 - in JS, call stack is made up of elements that are function references.
 - Javascript is single threaded hence it can do only one thing at a time. 

*/

function f1() {
	f2();
}
function f2() {
	f3();
}
function f3() {
	f4();
}
function f4() {
	f5();
}
function f5() {
	console.log('im the 5th function that is pushed to the call stack');
}

f1(); //this will naturally create a call stack

/* 
1. currently not executing anything == call stack is empty
2. calling a function == PUSH reference into the call stack
3. returning from a function == POP from call stack
*/

(function() {
	const add = (a, b) => a + b;
	const double = (a) => add(a, a);
	const printDouble = (a) => {
		const output = double(a);
		console.log(output);
	};
	printDouble(9);
})();

////////////////////////
// Call Stack:
// 4. add(9)
// 3. double(9)
// 2. printDouble(9)
// 1. anonymous() - since the complete logic in under IIFE
/////////////////////////

/*here each function reference is added to the stack and as soon as the execution of function is over it will be popped out of the stack.

/*
- Each time a function is added to the call stack, the arguments and its variables are added at the same level.
- it is sometime referred to as EXECUTION FRAME i.e. a function reference, its arguments and variables together.
*/

//In case the function calls itself recursively the, The Maximum call stack size exceeded error occurs
