// Exercise 1: Find the numbers divisible by 23

// 1-4. Create function that finds numbers divisible by 23
function displayNumbersDivisible() {
  let sum = 0;
  let numbers = [];

  for (let i = 0; i <= 500; i++) {
    if (i % 23 === 0) {
      numbers.push(i);
      sum += i;
    }
  }

  console.log("Numbers:", numbers.join(" "));
  console.log("Sum:", sum);
}

// Call the function
console.log("=== Numbers divisible by 23 ===");
displayNumbersDivisible();

// 5. Bonus: Add divisor parameter
function displayNumbersDivisibleBonus(divisor) {
  let sum = 0;
  let numbers = [];

  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      numbers.push(i);
      sum += i;
    }
  }

  console.log(`Numbers divisible by ${divisor}:`, numbers.join(" "));
  console.log("Sum:", sum);
}

// Test bonus function
console.log("\n=== Bonus Examples ===");
displayNumbersDivisibleBonus(3);
console.log();
displayNumbersDivisibleBonus(45);

// Exercise 2: Shopping List

// 1. Stock and prices objects
const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

// 2. Create shopping list
const shoppingList = ["banana", "orange", "apple"];

// 3-4. Create myBill function
function myBill() {
  let total = 0;

  for (let item of shoppingList) {
    if (item in stock && stock[item] > 0) {
      total += prices[item];
      stock[item]--; // Decrease stock
      console.log(`${item}: $${prices[item]} (in stock: ${stock[item]})`);
    } else {
      console.log(`${item}: out of stock`);
    }
  }

  return total;
}

// 5. Call the function
console.log("=== Shopping Bill ===");
const bill = myBill();
console.log(`Total: $${bill}`);

// Exercise 3: What's in my wallet?

// 1-2. Create changeEnough function
function changeEnough(itemPrice, amountOfChange) {
  // 3. Change order: quarters, dimes, nickels, pennies
  const coinValues = [0.25, 0.1, 0.05, 0.01];

  let totalChange = 0;
  for (let i = 0; i < amountOfChange.length; i++) {
    totalChange += amountOfChange[i] * coinValues[i];
  }

  return totalChange >= itemPrice;
}

// 4. Test the function
console.log("=== Wallet Tests ===");

console.log("Test 1: changeEnough(4.25, [25, 20, 5, 0])");
console.log("Result:", changeEnough(4.25, [25, 20, 5, 0])); // true

console.log("\nTest 2: changeEnough(14.11, [2, 100, 0, 0])");
console.log("Result:", changeEnough(14.11, [2, 100, 0, 0])); // false

console.log("\nTest 3: changeEnough(0.75, [0, 0, 20, 5])");
console.log("Result:", changeEnough(0.75, [0, 0, 20, 5])); // true

// Exercise 4 : Vacations Costs
// 1. Hotel cost function
function hotelCost() {
  let nights;
  do {
    nights = prompt("How many nights would you like to stay in the hotel?");
    nights = Number(nights);
  } while (!nights || nights <= 0);

  return nights * 140;
}

// 2. Plane ride cost function
function planeRideCost() {
  let destination;
  do {
    destination = prompt("What is your destination?");
  } while (!destination || typeof destination !== "string");

  destination = destination.toLowerCase();

  if (destination === "london") return 183;
  if (destination === "paris") return 220;
  return 300;
}

// 3. Rental car cost function
function rentalCarCost() {
  let days;
  do {
    days = prompt("How many days would you like to rent the car?");
    days = Number(days);
  } while (!days || days <= 0);

  let cost = days * 40;

  // 5% discount for more than 10 days
  if (days > 10) {
    cost = cost * 0.95;
  }

  return cost;
}

// 4. Total vacation cost function
function totalVacationCost() {
  const hotel = hotelCost();
  const plane = planeRideCost();
  const car = rentalCarCost();
  const total = hotel + plane + car;

  const result = `
                🏨 Hotel cost: $${hotel}
                ✈️ Plane tickets cost: $${plane}
                🚗 Car rental cost: $${car.toFixed(2)}
                
                💰 Total vacation cost: $${total.toFixed(2)}
            `;

  document.getElementById("result").innerHTML = result.replace(/\n/g, "<br>");

  return total;
}

// Exercise 5 : Users
function runDOMTasks() {
  // Task 2.1: Retrieve the div and console.log it
  const containerDiv = document.getElementById("exercise5");
  console.log(containerDiv);

  // Task 2.2: Change the name "Pete" to "Richard"
  const allLis = document.querySelectorAll("li");
  allLis.forEach((li) => {
    if (li.textContent === "Pete") {
      li.textContent = "Richard";
    }
  });

  // Task 2.3: Delete the second <li> of the second <ul>
  const ulElements = document.querySelectorAll("ul");
  const secondUl = ulElements[1];
  const secondLiOfSecondUl = secondUl.children[1]; // Sarah
  secondLiOfSecondUl.remove();

  // Task 2.4: Change the name of the first <li> of each <ul> to your name
  ulElements.forEach((ul) => {
    ul.children[0].textContent = "BiiN";
  });

  // Task 3.1: Add a class called 'student_list' to both <ul>'s
  ulElements.forEach((ul) => {
    ul.classList.add("student_list");
  });

  // Task 3.2: Add classes 'university' and 'attendance' to the first <ul>
  ulElements[0].classList.add("university", "attendance");

  // Task 4.1: Add light blue background color and padding to the div
  containerDiv.style.backgroundColor = "lightblue";
  containerDiv.style.padding = "20px";
  containerDiv.style.borderRadius = "10px";

  // Task 4.2: Do not display the <li> that contains "Dan"
  const updatedLis = document.querySelectorAll("li");
  updatedLis.forEach((li) => {
    if (li.textContent === "Dan") {
      li.style.display = "none";
    }
  });

  // Task 4.3: Add border to the <li> that contains "Richard"
  updatedLis.forEach((li) => {
    if (li.textContent === "Richard") {
      li.style.border = "2px solid #ff6b6b";
      li.style.padding = "5px";
      li.style.borderRadius = "5px";
    }
  });

  // Task 4.4: Change font size of the whole body
  document.body.style.fontSize = "18px";

  // Bonus: If background color is light blue, alert with users
  if (containerDiv.style.backgroundColor === "lightblue") {
    const visibleUsers = [];
    updatedLis.forEach((li) => {
      if (li.style.display !== "none") {
        visibleUsers.push(li.textContent);
      }
    });
    alert(`Hello ${visibleUsers[0]} and ${visibleUsers[1]}`);
  }

  console.log("All DOM manipulation tasks completed!");
}

runDOMTasks();
