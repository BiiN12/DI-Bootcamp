const greet = require("./greeting.js");
const colorFul = require("./colorful-message.js");
const read_file = require("./files/read-file.js");

console.log(greet("John"));
console.log(colorFul("Hello, World!"));

read_file("./files/file-data.txt");
