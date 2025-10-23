const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => (b == 0 ? 0 : a * b);
const divide = (a, b) => a / b;
module.exports = { add, subtract, multiply, divide };
