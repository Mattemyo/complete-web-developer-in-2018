import { isUndefined } from "util";

var user = {
  username: "hellow",
  password: "world"
};

var database = [
  user,
  {
    username: "Ingrid",
    password: "12345"
  },
  {
    username: "bjorn",
    password: "55555555"
  },
  {
    username: "horn",
    password: "343434343"
  }
];

var newsFeed = [
  {
    username: "eyy",
    timeline: "ey"
  },
  {
    username: "eyy",
    timeline: "ey"
  },
  {
    username: "eyy",
    timeline: "ey"
  }
];

var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats your password?");

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    var element = database[i];
    if (element.username === user && element.password === pass) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUndefined(username, password)) {
    console.log(newsFeed);
  } else {
    console.log("wrong username or password
    ");
  }
}
