import { readFile } from "fs/promises";

export const read_file = async (path) => {
  try {
    const data = await readFile(path, "utf-8");
    return data;
  } catch (error) {
    throw error;
  }
};

// import { readFile } from "fs";

// export const read_file = async (path) => {
//   try {
//     return await readFile(path, "utf-8");
//   } catch (error) {
//     throw new Error(`Failed to read file, at ${path}: ${error.message}`);
//   }
// };
