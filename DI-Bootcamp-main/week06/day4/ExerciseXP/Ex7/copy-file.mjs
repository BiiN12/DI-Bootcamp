import { copyFile } from "fs/promises";

copyFile("./source.txt", "./destination.txt")
  .then(() => {
    console.log("File copied successfully!");
  })
  .catch((err) => {
    console.error(err);
  });
