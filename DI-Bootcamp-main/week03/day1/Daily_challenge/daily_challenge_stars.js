// Star Pattern Exercise

for (let i = 1; i <= 6; i++) {
  console.log("* ".repeat(i));
}

console.log("\n--- Method 2: Using Two Nested For Loops ---");

for (let i = 1; i <= 6; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "* ";
  }
  console.log(stars);
}
