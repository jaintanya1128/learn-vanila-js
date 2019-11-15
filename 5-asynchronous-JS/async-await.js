/******************************************
  TOPIC: Async and await
*/

/*
- Async functions give us another way of dealing with asynchronous javascript.
- Previously we only had access to callbacks and to promises
    but with async await we can write asynchronous code with a more synchronous looking code structure.

*/

const delay = seconds => {
  return new Promise(
    resolve => setTimeout(resolve, seconds * 1000) //resolve is callback function
  )
};

//the async keyword right before any arguments that the function takes in,  so as to demostrate that it is an asynchronous function.
const countToFive = async () => {
  console.log('zero seconds');
  await delay(1); //What await means is it's going to wait for the value of delay called with one second to be returned before executing any further.
  console.log('one second');
  await delay(1);
  console.log('two seconds');
  await delay(3);
  console.log('five seconds');
};

//here we will se the delay happening while printing stuff on console
countToFive();

//However, if we remove the async and await keywords, there will be no delays in printing values









//------------------------------------------------------------------------------------------------------------------------------------------------------