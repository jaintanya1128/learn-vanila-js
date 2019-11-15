/******************************************
  TOPIC: Async and fetch
*/

/*
-  Fetch is by definition is asynchronous, we make a request, and then we wait to get some data back.


*/

const githubRequest = async (loginName) => {
  try {
    var response = await fetch(`https://api.github.com/users/${loginName}/followers`);
    var json = await response.json();
    var followerList = json.map(user => user.login);
    console.log(followerList);
  } catch (e) {
    console.log("Data didn't load", e);
  }
};

githubRequest('eveporcello');

//OR

(async (loginName) => {
  try {
    var response = await fetch(`https://api.github.com/users/${loginName}/followers`);
    var json = await response.json();
    var followerList = json.map(user => user.login);
    console.log(followerList);
  } catch (e) {
    console.log("Data didn't load", e);
  }
})('eveporcello');