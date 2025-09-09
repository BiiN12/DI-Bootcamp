// Exercise 1
// 1. Create a structured HTML file linked to a JS file
// 2. Write a Javascript function that takes a parameter: myAge
// 3. In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.
// 4. Call the function.

function ageCalculator(myAge) {
  const myMum = myAge * 2;
  const myDad = myMum * 1.2;

  console.log(
    `I'm ${myAge} years old. My mum is ${myMum} and my dad is ${Math.round(
      myDad
    )} years old.`
  );
}

ageCalculator(23);

const calc = (x, y, operator) => {
  if (operator === "+") x + y;
  else if (operator === "-") x - y;
  else if (operator === "*") x * y;
  else if (operator === "/") x / y;
  else "Wrong Value!";
};

// console.log(calc(7, 1, "*"));
