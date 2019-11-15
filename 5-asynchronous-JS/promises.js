/******************************************
  TOPIC: Promises
*/
/*
- Promises have emerged in the S6 to help us deal with asynchronous behavior in JavaScript.
- When something is asynchronous it means that some sort of weighting is going on.
  There's a delay between when we ask for something and when we receive it.
- Promises can either resolve or reject.
- They make asynchronous code more manageable and more reusable.
- Often we use promises to load data

*/

const delay = seconds => {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 10000);
  });
};

console.log("zero seconds");
delay(1).then(() => console.log("one second")); //then is fired when the promise is resoved
delay(3).then(() => console.log("three second"));


//we can pass arguments through the resolve method(which is a callback function)
const delay = seconds => {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${seconds} seconds delay is up`), seconds * 10000);
  });
};

console.log("zero seconds");
delay(1).then(msg => console.log(msg)); //then is fired when the promise is resoved
delay(3).then(msg => console.log(msg));


//now displaying some other messages and using multiple then methods
//- 'then' can be chained to one another to execute some code in a row
const delay = seconds => {
  return new Promise((resolve, reject) => {
    if (typeof seconds !== 'number') {
      reject(new Error('Argument seconds must be a number'));
    }
    setTimeout(
      () => resolve(`${seconds} second delay is up`),
      seconds * 1000
    );
  });
};

console.log("zero seconds");
delay("10 Minutes").then(msg => msg.toUpperCase())
  .then(msg => `${msg}!!!!!!`)
  .then(msg => console.log(msg));

delay(2).then(msg => msg.toUpperCase())
  .then(msg => `${msg}!!!!!!`)
  .then(msg => console.log(msg));


//------------------------------------------------------------------------------------------------------------------------------------------------------
//using promise to load data
const spacePeople = () => {
  return new Promise((resolves, rejects) => {
    const api = 'http://api.open-notify.org/astros.json';
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () => {
      if (request.status === 200) {
        resolves(JSON.parse(request.response));
      } else {
        rejects(Error(request.statusText));
      }
    };
    request.onerror = err => rejects(err);
    request.send();
  });
};

spacePeople().then(
  spaceData => console.log(spaceData),
  err => console.error(
    new Error('Cannot load space people')
  )
);


//------------------------------------------------------------------------------------------------------------------------------------------------------
/* The FETCH function
- the fetch function works natively in most browsers
- There are also node packages that work with fetch like node fetch and isomorphic fetch.


-The fetch function is always going to take in the URL for an API.
- Fetch also has access to a then method, which is going to execute as soon as the fetch has resolved.
- Fetch returns the entire response object.
- This response object has json function in its prototype, hence can be used to parse it as JSON
*/

fetch('http://api.open-notify.org/astros.json')
  .then(res => res.json())
  .then(console.log();)

//OR

const getPeopleInSpace = () =>
  fetch('http://api.open-notify.org/astros.json')
  .then(res => res.json());

getPeopleInSpace()
  .then(console.log();)

//------------------------------------------------------------------------------------------------------------------------------------------------------
//- Using fetch, we can return data using promises. They can be composed, reused, and saved.

const getPeopleInSpace = () =>
  fetch('http://api.open-notify.org/astros.json')
  .then(res => res.json());

const spaceNames = () =>
  getPeopleInSpace() //call the function to get the response
  .then(json => json.people) //parse the response to get only the people array
  .then(people => people.map(p => p.name)) //use map to get only the names from the array
  .then(names => names.join(', ')); //then finally use join to concatenate the names

spaceNames()
  .then(console.log);

/*
So promises are extremely useful.
We can incorporate them into all sorts of requests and make them into functions so that we can reuse them again and again,
and fetch makes the syntax much simpler than having to use xml http requests.
*/









//------------------------------------------------------------------------------------------------------------------------------------------------------