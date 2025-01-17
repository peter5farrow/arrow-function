/// /////// PROBLEM 1 //////////

// Create a one line arrow function called isGreaterThanTwenty that will take in a
// single parameter
// The function should return true if the parameter is greater than 20 and should return
// false otherwise
//
// Your function should be an arrow function (not a function declaration) and be contained
// within a single line

const isGreaterThanTwenty = (num) => num > 20;

/// /////// PROBLEM 2 //////////

// Create a one line arrow function called seven that will return the number 7

const seven = () => 7;

/// /////// PROBLEM 3 //////////

// Re-write the commented out function declarations provided below as arrow functions
// Name your functions the same as the versions provided below
//
// All functions should also be contained within a single line

// function addNums(num1, num2) {
//   return num1 + num2;
// }

const addNums = (num1, num2) => num1 + num2;

// function subtractNums(num1, num2) {
//   return num1 - num2;
// }

const subtractNums = (num1, num2) => num1 - num2;

// function double(num) {
//   return num * 2;
// }

const double = (num) => num * 2;

/// /////// PROBLEM 4 //////////

// Write an arrow function called gemInfo that takes in three parameters: gemType,
// gemSize, and gemWeight.
// The function should return an object with the properties: gemType, gemSize, gemWeight.
// The values of each property should correspond to its respective parameter.
//
// Your function should be an arrow function (not a function declaration) and it should
// contain an explicit return statement.

const gemInfo = (gemType, gemSize, gemWeight) => {
  const gem = {};
  gem["gemType"] = gemType;
  gem["gemSize"] = gemSize;
  gem["gemWeight"] = gemWeight;
  return gem;
};

/// /////// PROBLEM 5 //////////

// Create a function called outerFn, that takes in a callback as a parameter, and returns
// the result of invoking the callback.
// To see it working, invoke outerFn at the bottom, passing in innerFn as the callback.
// You should now see "The innerFn is a callback!" in the console.

const outerFn = (func) => func();

// ===== DO NOT TOUCH CODE BELOW THIS LINE ===== //
function innerFn() {
  return "The innerFn is a callback!";
}
// ===== DO NOT TOUCH CODE ABOVE THIS LINE ===== //

outerFn(innerFn);

/// /////// PROBLEM 6 //////////

// Create a function called fullName, that takes in three parameters: firstName, lastName, and a callback.
// The fullName function should return the callback, passing in firstName and lastName as parameters.
// To test, invoke fullName with your first name, last name and the welcomeMessage function as arguments.

const fullName = (firstName, lastName, callback) =>
  callback(firstName, lastName);

// ===== DO NOT TOUCH CODE BELOW THIS LINE ===== //
function welcomeMessage(first, last) {
  return `Welcome to DevMountain, ${first} ${last}!`;
}
// ===== DO NOT TOUCH CODE ABOVE THIS LINE ===== //

fullName("Peter", "Farrow", welcomeMessage);

/// /////// PROBLEM 7 //////////

// Do not edit the code below.
let age = "TBD";
// Do not edit the code above.

// Create a function called canDrink that will take in three parameters.
// The first parameter will be an number representing an age. The second and third parameters will be callbacks.
// The functions drinkSoda and drinkAlcohol are examples of callbacks that could be passed into your function.

// If the age is below 21, return the invocation of the first callback
// If the age is 21 or greater, return the invocation of the second callback

// ===== DO NOT TOUCH CODE BELOW THIS LINE ===== //
function drinkSoda() {
  return "Come back when you are legally allowed a drink!";
}

function drinkAlcohol() {
  return "Drink responsibly!";
}

// ===== DO NOT TOUCH CODE ABOVE THIS LINE ===== //

const canDrink = (age, func1, func2) => {
  if (age < 21) {
    return func1();
  } else {
    return func2();
  }
};

/// /////// PROBLEM 8 //////////

// Write two functions, one called add and one called multiply, that each takes in two numbers and
// returns the appropriate new value.

// Write a function called math that takes in two numbers, and a callback 'operator' as parameters.
// This function should return the result of invoking an operator with the appropriate arguments.

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const math = (a, b, operator) => {
  return operator(a, b);
};

////////// PROBLEM 9 //////////

// Do not edit the code below.
const mixedNumbers = [6, 3, 1, 7, 5, 2, 6, 8, 9, 4, 2, 7, 9, 3, 1, 8, 4, 3];
// Do not edit the code above.

/*
  Use the filter method on mixedNumbers to make a new array of just the even numbers.
*/

let evenNumbers = mixedNumbers.filter((num) => num % 2 === 0);

////////// PROBLEM 10 //////////

// Do not edit the code below.
const prices = [15.0, 23.0, 78.0, 34.0, 12.0, 86.0, 12.0, 79.0, 32.0];
// Do not edit the code above.

/*
  Use the map method on the prices array to calculate a new array of post-tax prices.
  Use a 7% tax rate.

  Math reminder! To calculate the price after tax, multiply the price by 1 plus the taxRate as a decimal.
  Example: if tax is 7%, the price afterTax could be calculated like this: afterTax = price * 1.07)
*/

let postTaxPrices = prices.map((price) => price * 1.07);

////////// PROBLEM 11 //////////

// Do not edit the code below.
const populations = [8175133, 3792621, 2695598, 2100263];
// Do not edit the code above.

/*
  Use the reduce method to calculate the sum of all the populations in the array.

  The reduce function has a slightly different setup for its callback.
  function(runningTotal, curElement) {} Function Form
  (runningTotal, curElement) => {} Arrow Form
*/

let totalPopulation = populations.reduce(
  (total, country) => (total += country)
);

////////// PROBLEM 12 //////////

// Do not edit the code below.
const monstersInYourPocket = [
  { monster: "Bulbabunny", CP: 156 },
  { monster: "Bulbabunny", CP: 135 },
  { monster: "Bulbabunny", CP: 250 },
  { monster: "Ponylopse", CP: 277 },
  { monster: "Ponylopse", CP: 184 },
  { monster: "Pikadoughnet", CP: 207 },
  { monster: "Bulbabunny", CP: 139 },
  { monster: "Pikadoughnet", CP: 47 },
  { monster: "Pikadoughnet", CP: 175 },
  { monster: "WaterHorsia", CP: 26 },
  { monster: "Ponylopse", CP: 19 },
  { monster: "Pikadoughnet", CP: 218 },
  { monster: "Charaflier", CP: 101 },
  { monster: "WaterHorsia", CP: 96 },
  { monster: "Pikadoughnet", CP: 253 },
  { monster: "Sandmush", CP: 146 },
  { monster: "Bulbabunny", CP: 247 },
  { monster: "Charaflier", CP: 55 },
  { monster: "Bulbabunny", CP: 72 },
  { monster: "Pikadoughnet", CP: 300 },
  { monster: "Sandmush", CP: 262 },
  { monster: "Sandmush", CP: 25 },
  { monster: "Charaflier", CP: 215 },
  { monster: "Ponylopse", CP: 125 },
  { monster: "Bulbabunny", CP: 178 },
];
// Do not edit the code above.

/*
  Now we're going to ramp these up a little bit.
  Instead of just arrays of numbers, we are going to have array of objects that we want to use map, filter, and reduce with.

  Use the filter method to return only the monsters that have a CP of over 200.
*/

let myStrongest = monstersInYourPocket.filter((monster) => monster.CP > 200);

/// /////// PROBLEM 13 //////////

// Create a function called getAges that takes in an array of objects which all have an 'age'
// property. It should return a new array containing the values of all the ages.
//
// Example: [
//  {'name': 'Joe', 'age': 35},
//  {'name': 'Heather', 'age': 42},
//  {'name': 'Barry', 'age': 60}]
//
// Calling getAges with this example should return [35, 42, 60]
//
// Make sure to use arrow functions combined with the map method.

const getAges = (arr) => arr.map((person) => person.age);
