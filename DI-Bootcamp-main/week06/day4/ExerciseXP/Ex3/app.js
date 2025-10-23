const { read_file, write_file } = require("./fileManager.js");

read_file("./Hello-world.txt");
write_file("./Bye-world.txt", "Writing to the file");
