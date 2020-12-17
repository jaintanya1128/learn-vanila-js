/*
 concept:
 1. for a normal function, 'this' refers to the calling object
 2. for arrow functions, 'this' refers to the object at the time of creation.

*/

a = 1;
b = 'Apple';
const obj = {
	a: 'Apple',
	aFor: function() {
		console.log(this.a);
	}
};

const obj2 = {
	a: 'Apricot',
	aFor: () => {
		console.log(this.a);
	}
};

//Output 1
obj.aFor();


//Output 2
obj2.aFor();


const aFor = obj.aFor;
//Output 3
aFor();


const aFor2 = () => {
	console.log(this.a);
};
//Output 4
aFor2();


function aFor3() {
	console.log(this.a);
}
//Output 5
aFor3();


obj2.aFor = aFor2;
//Output 6
obj2.aFor();


obj2.aFor = aFor3;
//Output 7
obj2.aFor();



/**
 * Ans 1: //Apple : this refers to obj object since it is the calling object
 * Ans 2: //Apricot : this refers to obj2 object since at the time of creation of aFor(), this referred to obj2
 * Ans 3: //1 :this refers to the window object at the time of calling
 * Ans 4: //1 :this refers to the window object
 * Ans 5: //1 :this refers to the window object at the time of calling
 * Ans 6: //1 :this refers to the window object at the time of creation for aFor2
 * Ans 7: //Apricot : this refers to obj2 object for normal function
 */