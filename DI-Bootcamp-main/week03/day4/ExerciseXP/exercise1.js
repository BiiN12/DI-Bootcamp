// Exercise 1 : Scope
// #1
function funcOne() {
  let a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne();
// Explanation: The alert shows the final value of 'a' which is 3

// #1.2 What will happen if the variable is declared
// with const instead of let ?
// Explanation: It'll throw an error(TypeError) because we trying assign to a constant variable.

//#2
let a = 0;
function funcTwo() {
  a = 5;
}

function funcThree() {
  alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree(); // Will alert "inside the funcThree function 0"
funcTwo(); // No alert, but modifies global 'a' to 5
funcThree(); // Will alert "inside the funcThree function 5"
// #2.2 What will happen if the variable is declared
// with const instead of let ?

// Explanation: If global 'a' is declared as 'const a = 0', it becomes immutable. So it'll throw an error

//#3
function funcFour() {
  window.a = "hello";
}

function funcFive() {
  alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour(); // No alert, but creates global property window.a = "hello"
funcFive(); // Will alert "inside the funcFive function hello"

//#4
let a = 1;
function funcSix() {
  let a = "test";
  alert(`inside the funcSix function ${a}`);
}

// #4.1 - run in the console:
funcSix(); // Will alert "inside the funcSix function test"
// #4.2 What will happen if the variable is declared
// with const instead of let ?
// Explanation: Same behavior - will alert "inside the funcSix function test"

//#5
let a = 2;
if (true) {
  let a = 5;
  alert(`in the if block ${a}`); // in the if block 5"
}
alert(`outside of the if block ${a}`); // "outside of the if block 2"

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared
// with const instead of let ?
// Explanation: Same behavior - alerts will show "5" then "2"
