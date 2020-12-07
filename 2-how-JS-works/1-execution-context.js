//------------------------------------------------------------------------------------------------------------------------------------------------------
/******************************************
  TOPIC: Execution Context
*****************************************/

/*
  - Just like functions/modules/packages allow you to manage the complexity of writing code, 
    Execution Contexts allow the JavaScript engine to manage the complexity of interpreting and running your code.
  - The first Execution Context that gets created when the JavaScript engine runs your code is called the “Global Execution Context”. 
    Initially this Execution Context will consist of two things - a global object and a variable called this. 
    'this' will reference the global object which will be 'window' if you’re running JavaScript in the browser 
    or 'global' if you’re running it in a Node environment.  
*/
/************** Execution Context Phases ***************************/
/* 
  1. Creation phase 
  2. Execution phase

  - Creation phase, the JavaScript engine will
    1. Create a global object.
    2. Create an object called “this”.
    3. Set up memory space for variables and functions.
    4. Assign variable declarations a default value of “undefined” while placing any function declarations in memory.
  
  - It’s not until the Execution phase where the JavaScript engine starts running your code line by line and executing it.
*/

/*
  - When code is run in JavaScript, the environment in which it is executed is very important, and is evaluated as 1 of the following:
      1. Global code — The default environment where your code is executed for the first time.
      2. Function code — Whenever the flow of execution enters a function body.

  - In other words, as we start the program, we start in the global execution context. 
  - Function Execution Context is created whenever a function is invoked.
  - Whenever a Function Execution Context is created, the JavaScript engine will
    1. Create an arguments object instead of a global object.
    2. Create an object called this.
    3. Set up memory space for variables and functions.
    4. Assign variable declarations a default value of “undefined” while placing any function declarations in memory.
  - Anytime a function is invoked, a new Execution Context is created and added to the Execution Stack. 
    The JavaScript engine creates what’s called an “Execution Stack” (also known as the “Call Stack”).
  - Whenever a function is finished running through both the Creation and Execution phase, it gets popped off the Execution Stack. 
    - The functions sends the return value back to the calling context. 
      The calling context is the execution context that called this function, it could be the global execution context or another local execution context. 
      It is up to the calling execution context to deal with the return value at that point. 
      The returned value could be an object, an array, a function, a boolean, anything really. 
      If the function has no return statement, undefined is returned.
    - The local execution context is destroyed. 
      This is important. Destroyed. 
      All the variables that were declared within the local execution context are erased. They are no longer available. 
      That’s why they’re called local variables.
*/
/*
===========
Summary:
===========
JavaScript is a single threaded language, which means it can do only one thing at a time. 
When we call a function, the previous execution context is paused. The called function is on the top and it is then executed. 
When that finishes, it is popped off the stack and then the older execution context is resumed. 
This ‘stack’ of execution is what keeps track of the position of execution in our application.
*/
