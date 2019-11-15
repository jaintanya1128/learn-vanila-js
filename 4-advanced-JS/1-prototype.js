/* NOTES */
/*
JavaScript Basic:
1. numbers, strings, booleans, undefined and null values, all of these are primitives, and everything else are objects.
2. JavaScript handles objects and inheritance through prototypes.
3. In very simple terms object-oriented programming makes heavy use of objects, properties, and methods, and these objects interact with one another to form complex applications.
4. in JavaScript a constructor or prototype is used to create as many instances as we want, which of course are also objects.
5. In simple terms, inheritance is when one object is based on another object. It's when one object gets access to another object's properties and methods.
6. JavaScript is a prototype-based language, which means that inheritance works by using something called prototypes.
   In practice, it means that each and every JavaScript object has a prototype property which makes inheritance possible in JavaScript.

Summary:
* Every JavaScript object has a prototype property, which makes inheritance possible in JavaScript.
* The prototype property of an object is where we put methods and properties that we want other objects to inherit.
* The Constructor's prototype property is not the prototype of the Constructor itself, but it's the prototype of all instances that are created through it.
* When a certain method, or property, is called, the search starts in the object itself, and if it cannot be found there,
  the search moves up on to the object's prototype. This continues until the method is found. And this is the prototype chain.
*/