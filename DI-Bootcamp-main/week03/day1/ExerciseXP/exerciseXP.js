// Exercise 1 : List of people
const people = ["Greg", "Mary", "Devon", "James"];

// 1. Remove "Greg" from the people array
people.shift(); // removes first element
// Alternative: people.splice(0, 1);
console.log("1. After removing Greg:", people);

// 2. Replace "James" to "Jason"
const jamesIndex = people.indexOf("James");
if (jamesIndex !== -1) {
  people[jamesIndex] = "Jason";
}
console.log("2. After replacing James with Jason:", people);

// 3. Add your name to the end of the people array
people.push("BiiN");
console.log("3. After adding my name:", people);

// 4. Console.log Mary's index
const maryIndex = people.indexOf("Mary");
console.log("4. Mary's index:", maryIndex);

// 5. Make a copy of the people array using slice method
// Current array should be: ["Mary", "Devon", "Jason", "BiiN"]
// Copy should NOT include "Mary" (index 0) or "BiiN" (last element)
const peopleCopy = people.slice(1, -1);
console.log("5. Copy without Mary and my name:", peopleCopy);

// 6. Get the index of "Foo"
const fooIndex = people.indexOf("Foo");
console.log("6. Index of 'Foo':", fooIndex); //'Foo' doesn't exist in the array, indexOf returns -1 for non-existent elements

// 7. Create a variable called 'last' with the last element
const last = people[people.length - 1];
console.log("7. Last element:", last);

console.log("\n--- Part II - Loops ---");

// Part II - Loops

// 1. Iterate through the people array and console.log each person
console.log("1. All people:");
for (let i = 0; i < people.length; i++) {
  console.log(`   ${people[i]}`);
}

// Alternative with for...of loop:
console.log("\n1. All people (using for...of):");
for (const person of people) {
  console.log(`   ${person}`);
}

// 2. Iterate and exit after console.log "Devon"
console.log("\n2. People until Devon:");
for (let i = 0; i < people.length; i++) {
  console.log(`   ${people[i]}`);
  if (people[i] === "Devon") {
    break;
  }
}

// Exercise 2: Your favorite colors

// 1. Create an array called colors with five favorite colors
const colors = ["blue", "purple", "green", "orange", "red"];

console.log("My favorite colors:", colors);

// 2. Loop through the array and console.log with #1, #2, etc.
console.log("\n--- Basic Version ---");
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// 3. Bonus: Using correct suffixes (1st, 2nd, 3rd, 4th, 5th)
console.log("\n--- Bonus Version with Suffixes ---");

// Create an array of suffixes
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
  const position = i + 1;
  console.log(`My ${position}${suffixes[i]} choice is ${colors[i]}`);
}

// Alternative bonus approach with a function for more flexibility
console.log("\n--- Alternative Bonus with Function ---");

function getOrdinalSuffix(number) {
  // Handle special cases for 11th, 12th, 13th
  if (number >= 11 && number <= 13) {
    return "th";
  }

  // Check the last digit
  const lastDigit = number % 10;
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

for (let i = 0; i < colors.length; i++) {
  const position = i + 1;
  const suffix = getOrdinalSuffix(position);
  console.log(`My ${position}${suffix} choice is ${colors[i]}`);
}

// Simulated prompt function for demonstration
function simulatedPrompt(message) {
  // This simulates user input for testing purposes
  // In real usage, replace this with actual prompt() or readline-sync
  const testInputs = ["5", "abc", "7", "15"];
  const input = testInputs.shift() || "12";
  console.log(`${message} ${input}`); // Show what user "entered"
  return input;
}

// Exercise 3
// let userInput = prompt("Please enter a number: ");
// console.log("Data type received:", typeof userInput);
// let number = Number(userInput);

// while (isNaN(number) || number < 10) {
//   if (isNaN(number)) {
//     console.log("That's not a valid number!");
//   } else {
//     console.log(number + " is less than 10.");
//   }
//   userInput = prompt("Please enter a number:");
//   number = Number(userInput);
// }

// console.log("Great! " + number + " is 10 or greater!");

// Exercise 4 : Building Management
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

console.log("=== Building Object Exercise ===\n");

// 1. Console.log the number of floors in the building
console.log("1. Number of floors in the building:", building.numberOfFloors);

// 2. Console.log how many apartments are on the floors 1 and 3
const firstFloorApts = building.numberOfAptByFloor.firstFloor;
const thirdFloorApts = building.numberOfAptByFloor.thirdFloor;

console.log("2. Apartments on floor 1:", firstFloorApts);
console.log("   Apartments on floor 3:", thirdFloorApts);

// 3. Console.log the name of the second tenant and the number of rooms he has
const secondTenant = building.nameOfTenants[1]; // Index 1 = second tenant
const secondTenantRooms =
  building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0]; // [0] = rooms

console.log("3. Second tenant:", secondTenant);
console.log("   Number of rooms:", secondTenantRooms);

// 4. Check if the sum of Sarah's and David's rent is bigger than Dan's rent
const sarahRent = building.numberOfRoomsAndRent.sarah[1]; // [1] = rent
const davidRent = building.numberOfRoomsAndRent.david[1]; // [1] = rent
const danRent = building.numberOfRoomsAndRent.dan[1]; // [1] = rent

console.log("\n4. Rent comparison:");
console.log("   Sarah's rent:", sarahRent);
console.log("   David's rent:", davidRent);
console.log("   Dan's rent:", danRent);

const sarahDavidSum = sarahRent + davidRent;
console.log("   Sarah + David rent sum:", sarahDavidSum);

if (sarahDavidSum > danRent) {
  console.log("   Sum of Sarah's and David's rent IS bigger than Dan's rent");
  building.numberOfRoomsAndRent.dan[1] = 1200;
  console.log(
    "   Dan's rent increased to:",
    building.numberOfRoomsAndRent.dan[1]
  );
} else {
  console.log(
    "   Sum of Sarah's and David's rent is NOT bigger than Dan's rent"
  );
  console.log("   Dan's rent remains:", danRent);
}

// Exercise 5: Family

// 1. Create an object called family with key value pairs
const family = {
  father: "John",
  mother: "Sarah",
  son: "Mike",
  daughter: "Emma",
  pet: "Max the dog",
  city: "New York",
  numberOfMembers: 4,
};

// 2. Using a for in loop, console.log the keys of the object
console.log("\n2. Keys of the family object:");
for (let key in family) {
  console.log(key);
}

// 3. Using a for in loop, console.log the values of the object
console.log("\n3. Values of the family object:");
for (let key in family) {
  console.log(family[key]);
}

// Exercise 6: Rudolf

const details = {
  my: "name",
  is: "Rudolf",
  the: "reindeer",
};

// 1. Using a for loop, console.log "my name is Rudolf the reindeer"
console.log("\n6. Using for...in loop:");

let sentence = "";

for (let key in details) {
  sentence += key + " " + details[key] + " ";
}

// Remove the trailing space and console.log
sentence = sentence.trim();
console.log(sentence);

// Exercise 7: Secret Group

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Step 1: Get the first letter of each name
let firstLetters = [];
for (let i = 0; i < names.length; i++) {
  firstLetters.push(names[i][0]); // [0] gets the first character
}

console.log("First letters:", firstLetters);

// Step 2: Sort the letters alphabetically
firstLetters.sort();
console.log("Sorted letters:", firstLetters);

// Step 3: Join them into a single string
const secretSocietyName = firstLetters.join("");

// 2. Console.log the name of their secret society
console.log("Secret society name:", secretSocietyName);
