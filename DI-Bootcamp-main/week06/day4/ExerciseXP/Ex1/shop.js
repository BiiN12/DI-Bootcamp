const products = require("./products.js");

// console.log(products);

const product = function (id) {
  return products.find((product) => product.id === id);
};

console.log(product(1));
console.log(product(2));
// console.log(product(3));
