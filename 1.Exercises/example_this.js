/*
 concept:
 1. for a normal function, 'this' refers to the calling object
 2. for arrow functions, 'this' refers to the object at the time of creation.

*/

a = 1;
b = "Apple";
const obj = {
  a: "Apple",
  aFor: function() {
    console.log(this.a);
  }
};

const obj2 = {
  a: "Appricot",
  aFor: () => {
    console.log(this.a);
  }
}

//Output 1
obj.aFor();
//Apple : this refers to obj object since it is the calling object

//Output 2
obj2.aFor();
//Appricot : this refers to obj2 object since at the time of creation of aFor(), this refered to obj2

const aFor = obj.aFor;
//Output 3
aFor();
//1 :this refers to the window object at the time of calling

const aFor2 = () => {
  console.log(this.a);
}
//Output 4
aFor();
//1 :this refers to the window object

function aFor3() {
  console.log(this.a);
}
//Output 5
aFor3();
//1 :this refers to the window object at the time of calling

obj2.aFor = aFor2;
//Output 6
obj2.aFor();
//1 :this refers to the window object at the time of creation for aFor2

obj2.aFor = aFor3;
//Output 7
obj2.aFor();
//Appricot : this refers to obj2 object for normal function