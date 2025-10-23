const { readFile, writeFile } = require("fs");

const read_file = (path) => {
  readFile(path, "utf-8", (err, data) => {
    if (err) console.log(err);
    console.log(data);
  });
};

const write_file = (path, content) => {
  writeFile(path, content, (err) => {
    if (err) console.log(err);
    console.log("File written successfully!");
  });
};

module.exports = { read_file, write_file };
