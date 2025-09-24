// Exercise 1 : Giphy API
const gifUrl =
  "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

async function doAll(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
}

doAll(gifUrl);

// Exercise 2 : Giphy API
const gifUrl2 =
  "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&offset=2&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

async function doAll2(url) {
  try {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

doAll2(gifUrl2);

// Exercise 3 : Async function

async function exe3() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    let data = await response.json();
    console.log(data.result);
  } catch (error) {
    console.log(error);
  }
}

exe3();

// Exercise 4: Analyze
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall(); // outcome: "calling" and after 2 seconds: "resolved"
