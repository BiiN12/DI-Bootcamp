const { readFile } = require("fs");

const read_file = (path) => {
  readFile(path, "utf-8", (err, data) => {
    if (err) console.log(err);
    console.log(data);
  });
};

module.exports = read_file;
