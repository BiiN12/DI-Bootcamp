// Exercise 2 : Ternary operator

// function winBattle() {
//   return true;
// }

const winBattle = () => true;

let experiencePoints = winBattle ? 10 : 1;
console.log(experiencePoints);

// Exercise 3 : Is it a string ?

const isString = (x) => typeof x === "string";

console.log(isString("hello"));
//true
console.log(isString([1, 2, 4, 0]));
//false

// Exercise 4 : Find the sum

const sum = (x, y) => x + y;

// Exercise 5 : Kg and grams

// 1. Function Declaration
function kgToGrams(kg) {
  return kg * 1000;
}

console.log(`2 kg = ${kgToGrams(2)} grams`);

// 2. Function Expression
const kgToGramsExpression = function (kg) {
  return kg * 1000;
};

console.log(`1.8 kg = ${kgToGramsExpression(1.8)} grams`);

// 3.
// Function declarations are hoisted (can be called before declaration), function expressions are not hoisted.

// 4. Arrow Function (one line)
const kgToGramsArrow = (kg) => kg * 1000;

console.log(`7.2 kg = ${kgToGramsArrow(7.2)} grams`);

// Exercise 6 : Fortune teller
