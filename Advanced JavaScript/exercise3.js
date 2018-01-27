// change everything below to the newer Javascript!

// let + const
let a = "test";
const b = true;
const c = 789;
a = test;

// Destructuring
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const { firstName, lastName, age, eyecolor } = person;

// Object properties
var a = "test";
var b = true;
var c = 789;

var okObj = {
  a,
  b,
  c
};

// Template strings
const message = `Hellow ${firstName} have I met you beore? I think we met in ${city} last summer no?`;

// default arguments
// default age to 10;
function isValidAge(age = 10) {
  return age;
}

// Symbol
// Create a symbol: "This is my first Symbol"
const symbol = Symbol("this is my first symbol");

// Arrow functions
function whereAmI(username, location) {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
}

const whereAmI = (username, location) => {
  return username && location ? "I am not lost" : "I am totally lost";
};
