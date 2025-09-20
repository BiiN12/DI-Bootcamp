// Exercise 1 : Comparison
function compareToTen(num) {
  return new Promise(function (resolve, reject) {
    if (num <= 10) resolve(`${num} less than or equal to 10`);
    else reject(`${num} greater than 10!`);
  });
}

//In the example, the promise should reject
compareToTen(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//In the example, the promise should resolve
compareToTen(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Exercise 2 : Promises
const delayedPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }, 4000); // 4 seconds = 4000 milliseconds
});

delayedPromise.then((result) => {
  console.log(result); // Will log "success" after 4 seconds
});

// Exercise 3 : Resolve & Reject
// 1. Create a promise that resolves immediately with value 3
const resolvedPromise = Promise.resolve(3);

// 2. Create a promise that rejects immediately with "Boo!"
const rejectedPromise = Promise.reject("Boo!");

// Example usage of the resolved promise:
resolvedPromise.then((value) => {
  console.log("Resolved with:", value); // Will log "Resolved with: 3"
});

// Example usage of the rejected promise:
rejectedPromise.catch((error) => {
  console.log("Rejected with:", error); // Will log "Rejected with: Boo!"
});
