//------------------------------------------------------------------------------------------------------------------------------------------------------
/**********************************************************
  TOPIC: Build in JavaScript Functions and Objects
*********************************************************/
/*
- JavaScript has 5 functions built in to the language. They are eval, parseInt, parseFloat, escape, and unescape
- JavaScript also has few built-in objects: Array, Date, Boolean, Math, Number and String. Each of them have their own methods and properties
*/

//------------------------------------------------------------------------------------------------------------------------------------------------------
/*********** Build in Functions | 1. Eval  **************/
/*
  - Evaluates a string and returns a value.
  - eval(Expression)
  - Expression is evaluated, and if the result is not a string, the result is returned.
  - If the result is a string, it is taken to be a JavaScript program, and it is evaluated. If the program completes normally, eval returns the value of the last expression in it.

*/
var x = 2;
var y = 39;
var z = '42';
console.log(eval('x + y + 1'));
console.log(eval(z));

//------------------------------------------------------------------------------------------------------------------------------------------------------
/*********** Build in Functions | 2. parseInt  **************/
/*
  - 
*/

//------------------------------------------------------------------------------------------------------------------------------------------------------
/*********** Build in Functions | 3. parseFloat  **************/
/*
  - 
*/

parseFloat('3.14'); //3.14
parseFloat('314e-2'); //3.14
parseFloat('0.0314E+2'); //3.14
var x1 = '3.14';
parseFloat(x1); //3.14

parseFloat('FF2'); //NaN
//------------------------------------------------------------------------------------------------------------------------------------------------------
/*********** Build in Functions | 4. escape  **************/
/*
  - Returns the hexadecimal encoding of an argument in the ISO Latin-1 character set. 
  - Syntax: escape("string") where 'string' is a string in the ISO Latin-1 character set.
  - The value returned by the escape function is one of the following:
    1. For alphanumeric characters, the same character (i.e. the function has no effect).
    2. For the space character, a + sign.
    3. For non-alphanumeric characters other than space, a string of the form "%xx," where xx is the hexadecimal encoding of the ASCII character in the ISO Latin-1 character set.
*/

escape('abc&%'); //abc%26%25

//------------------------------------------------------------------------------------------------------------------------------------------------------
/*********** Build in Functions | 5. unescape  **************/
/*
  - For each distinct set of characters in the argument string of the following form
    1. "%integer", where integer is a number between 0 and 255 (decimal)
    2. "hex", where hex is a number between 0x0 and 0xFF (hexadecimal)
  - It returns the corresponding ASCII character in the ISO Latin-1 character set. 
  - For characters not in the above form, unescape returns the characters unmodified; except for the + character, for which a space is returned.
*/
unescape('%26'); //&
unescape('ab%21%23'); //ab!#
