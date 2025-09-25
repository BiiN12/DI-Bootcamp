"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercise 1: Hello, World! Program
console.log('Hello, World!');
// Exercise 2: Type Annotations
let age = 24;
let name = "John";
console.log(`My name is ${name} and I am ${age} years old.`);
// Exercise 3: Union Types
let id;
// Exercise 4: Control Flow with if...else
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    }
    else if (num < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
}
console.log(checkNumber(10));
// Exercise 5: Tuple Types
function getDetails(name, age) {
    return [name, age, `Hello ${name}!, you are ${age} years old.`];
}
console.log(getDetails("Alice", 25));
function createPerson(name, age) {
    return { name, age };
}
const person = createPerson("Bob", 25);
console.log(person);
// Exercise 7: Type Assertions
//# sourceMappingURL=main.js.map