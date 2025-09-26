let b = 3, d = b, u = b;

const tree = ++d * d*b * b++ +
 + --d+ + +b-- +
 + +d*b+ +
 u


console.log(tree)

type StrNum = string | number;

const param = function (a: number, b: StrNum): StrNum {
    if (typeof b === 'string') return a + b + "";
    return a + b;
   
}

console.log(param(5, 10)); // Outputs: 15
console.log(param(5, ' apples')); // Outputs: '5 apples'


/** function overloading */
function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") return a + b + "";
  if (typeof a === "number" && typeof b === "number") return a + b;
  return -1;
}

console.log(add(5, 10)); // Outputs: 15
console.log(add("Hello, ", "world!")); // Outputs: 'Hello, world!'
// console.log(add(5, " apples")); // Outputs: -1  

const yearSpan = <HTMLSpanElement>document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}