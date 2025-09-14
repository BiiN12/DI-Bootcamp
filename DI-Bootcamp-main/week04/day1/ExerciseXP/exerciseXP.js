// Exercise 1 : Colors
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1
colors.forEach((color, i) => {
  console.log(`#${i + 1} choice is ${color}`);
});

// 2
colors.some((color) => color === "Violet")
  ? console.log("Yeah")
  : console.log("No");

// Exercise 2 : Colors #2
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, i) => {
  const suffix = i < 3 ? ordinal[i + 1] : ordinal[0];
  console.log(`#${i + 1}${suffix} choice is ${color}`);
});

// Exercise 3 : Analyzing
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result); // ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// ------2------
const country = "USA";
console.log([...country]); // ['U', 'S', 'A']

// ------Bonus------
let newArray = [...[, ,]];
console.log(newArray); // [undefined, undefined]

// Exercise 4 : Employees
const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

// 1
const welcomeStudents = [];

users.map((user) => {
  welcomeStudents.push(`Hello ${user.firstName}`);
});

console.log(welcomeStudents);

// 2
const fullStack = users.filter((user) => user.role === "Full Stack Resident");
console.log(fullStack);

// Bonus
const fullStackNames = users
  .filter((user) => user.role === "Full Stack Resident")
  .map((user) => user.lastName);
console.log(fullStackNames);

// Exercise 5 : Star Wars
const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

const sentence = epic.reduce((acc, word) => acc + " " + word);
console.log(sentence);

// Exercise 6 : Employees #2
const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

// 1
const passed = students.filter((student) => student.isPassed);
console.log(passed);

// 2
students
  .filter((student) => student.isPassed)
  .forEach((student) => {
    console.log(
      `Good job${student.name}, you passed the course in ${student.course}`
    );
  });
