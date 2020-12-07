//------------------------------------------------------------------------------------------------------------------------------------------------------
/******************************************
  TOPIC: Callback Function
*****************************************/
/*
A callback function is a function which is:

- passed as an argument to another function
- is invoked after some kind of event
- once its parent function completes, the function passed as an argument is then called
*/

//the callback function
function done() {
	console.log('Done');
}

//the parent function
function increment(num, callBack) {
	for (var i = 0; i <= num; i++) {
		console.log(i);
	}
	return callBack();
}

//the callback function is passed to the increment function
increment(10, done);
