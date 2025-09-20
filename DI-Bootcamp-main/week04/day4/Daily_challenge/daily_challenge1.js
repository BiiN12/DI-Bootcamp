// 1st daily challenge
function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    if (arr.every((word) => typeof word == "string")) {
      const arrUpperCased = arr.map((word) => word.toUpperCase());
      resolve(arrUpperCased);
    } else {
      reject("The array contain another character!");
    }
  });
}
function sortWords(arr) {
  return new Promise((resolve, reject) => {
    if (arr.length > 4) {
      resolve(arr.sort());
    } else {
      reject("The length of the array are less than 4");
    }
  });
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//in this example, you should see in the console,
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch((error) => console.log(error));
