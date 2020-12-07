//------------------------------------------------------------------------------------------------------------------------------------------------------
/******************************************
  TOPIC: Prototype
*****************************************/
/*
  one line definition:
  Prototype is a property on a function that points to an Object.
*/
/*
- Every Object is linked to another object. That linked object is called Prototype.
- Objects inherit properties and methods from its prototype ancestry. 
  When a certain method, or property, is called, the search starts in the object itself, and if it cannot be found there,
  the search moves up on to the object's prototype. This continues until the method is found. And this is the prototype chain.
- A prototype is automatically assigned to any Object
- The prototype property of an object is where we put methods and properties that we want other objects to inherit.
- We can define an Object prototype
*/

/******* METHODS for setting the Prototype on an Object ***************/
/*  1. Constructor Function
    2. Object.create(prototype)
    3. Object.setPrototypeOf(obj, prototype) -- came in ES6, it is resource inefficient, should be used with care
*/
