// Exercise 1: Hello, World! Program
console.log('Hello, World!');

// Exercise 2: Type Annotations
let age : number =24;
let name : string ="John";

console.log(`My name is ${name} and I am ${age} years old.`);

// Exercise 3: Union Types

let id : number | string;

// Exercise 4: Control Flow with if...else

function checkNumber(num: number): string {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(10));

// Exercise 5: Tuple Types

function getDetails(name: string, age: number): [string, number, string]{
    return [name, age, `Hello ${name}!, you are ${age} years old.`];
}

console.log(getDetails("Alice", 25));

// Exercise 6: Object Type Annotations

type Person = {
    name: string;
    age: number;
}

function createPerson(name: string, age: number): Person {
    return { name, age };
}

const person: Person = createPerson("Bob", 25);
console.log(person);


// Exercise 7: Type Assertions
const dom = document.getElementById('app') as HTMLInputElement;

if (dom) {
    dom.value = "Hello, TypeScript!";
    console.log(dom.value);
} else {
    console.log("Element not found");
}


// Exercise 8: switch Statement with Complex Conditions

function getAction(role: string) {
    switch (role) {
        case "admin":
            return "Manage users and settings";
        case "editor":
            return "You can edit content.";
        case "viewer":
            return "You can view content.";
        case "guest":
            return "Limited access.";
        default:
            return "Invalid role.";
    }
}

// Test the function with different roles
console.log(getAction("admin")); // Output: Manage users and settings
console.log(getAction("editor")); // Output: You can edit content
console.log(getAction("viewer")); // Output: You can view content
console.log(getAction("guest")); // Output: Limited access
console.log(getAction("unknown")); // Output: Invalid role


// Exercise 9: Function Overloading with Default Parameters
function greet(name: string): string {
    if (!name) {
        return `Hello, Guest!`;
    }
    return `Hello, ${name}!`;
}

console.log(greet("Alice"));
console.log(greet(""));