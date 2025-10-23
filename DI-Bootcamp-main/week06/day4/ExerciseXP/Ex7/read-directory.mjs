import { readdir } from "fs/promises";

readdir("./")
  .then((files) => {
    console.log(files);
  })
  .catch((err) => {
    console.error(err);
  });
