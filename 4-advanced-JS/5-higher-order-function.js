/**********************************
 * Lecture: Hight Order Function
 **********************************/
/*
  A higher order function is a function that takes function as an argument or returns a function 
*/
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;

function calculator() {
    let total = 0;
    function doOperation(operation, operand) {
        // do something on total
        total = operation(total, operand);
        display.log(total);
        return doOperation;
    }

    return doOperation;
}

calculator()(add, 3)(multiply, 5)(subtract, 6, function(result) {
    display.log(result);
});
