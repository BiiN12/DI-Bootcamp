// 2nd daily challenge
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

const toJs = function (json) {
  return new Promise((resolve, reject) => {
    const jsonObj = JSON.parse(json);
    if (jsonObj == "") reject("it's empty!");
    else resolve(jsonObj);
  });
};

const toMorse = function (morseJS) {
  const userInput = prompt("Please enter a word");
  const result = [];
  for (let i = 0; i < userInput.length; i++) {
    result.push(morseJS[userInput[i].toLowerCase()]);
  }
  return new Promise((resolve, reject) => {
    if (result == "" || result == undefined) reject("it's empty!");
    else resolve(result);
  });
  // return result.join(" ");
};

const joinWords = function (morseTranslation) {
  return morseTranslation.join(" ");
};

toJs(morse).then((e) =>
  toMorse(e).then((f) => {
    const result = joinWords(f);
    const div = document.createElement("div");
    div.textContent = result;
    document.body.appendChild(div);
  })
);
