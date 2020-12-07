/*
1. The "use strict" directive was new in ECMAScript version 5.
2. The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
3. It helps you to write cleaner code
4. It can be placed at the at the beginning of the function body or the start of the script
    - Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode).
    - Declared inside a function, it has local scope (only the code inside the function is in strict mode)
    - Modules are introduced in ECMAScript 2015, hence are strict by default
*/
x = 3.14; // This will not cause an error.
myFunction();

function myFunction() {
	'use strict';
	y = 3.14; // This will cause an error
}

// by default it is not activated in to the browsers
// in browsers it can be used as below
(function() {
	'use strict';

	// ...your code...

})();

/****** Not Allowed in Strict Mode *****/
/*
1. Using a variable, without declaring it
2. Deleting a variable (or object or a function) is not allowed.
3. Duplicating a parameter name is not allowed
4. using reserved keywords as variables is not allowed
5.  The this keyword in functions behaves differently in strict mode.
    - The this keyword refers to the object that called the function.
    - If the object is not specified, 
        - Strict mode : functions return undefined 
        - Normal mode : function will return the global object ie window
*/
