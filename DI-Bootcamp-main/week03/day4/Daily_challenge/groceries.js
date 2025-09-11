let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => console.log(fruit));
};

displayGroceries();

const cloneGroceries = () => {
  let user = client;
  client = "Betty";
  console.log(user); // No. Because the value of user is a string and user is just copied the value of client, But isn't the variable itself.

  let shopping = groceries;
  shopping.totalPrice = "$35";
  console.log(groceries.totalPrice); // Yes. Because shopping and groceries point to the SAME object in memory. When we modify shopping.totalPrice, we're actually modifying groceries.totalPrice because they're the same object.

  groceries.other.paid = false;
  console.log(shopping.other.paid); // Yes. Same reason as before - shopping and groceries reference the same object. The nested object 'other' is also the same reference.
};

cloneGroceries();
