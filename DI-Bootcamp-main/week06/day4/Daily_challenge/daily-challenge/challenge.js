const greet = require("./task1/greeting.js");
const colorFulMessage = require("./task2/colorful-message.js");
const read_file = require("./files/read-file.js");

console.log(greet("John"));
console.log(colorFulMessage("Hello, World!"));

read_file("./files/file-data.txt");
