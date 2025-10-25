const chalk = require("chalk").default || require("chalk");

const colorFulMessage = (word) => chalk.blue(word);
// console.log(chalk.red("Hello, Everyone!"));

module.exports = colorFulMessage;
