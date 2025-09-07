// 1. Create a sentence with "not" and "bad"
const sentence = "The movie is not that bad, I like it";

// 2. Find position of "not"
const wordNot = sentence.indexOf("not");

// 3. Find position of "bad"
const wordBad = sentence.indexOf("bad");

// 4. Check if "bad" comes after "not" and replace
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  const before = sentence.substring(0, wordNot);
  const after = sentence.substring(wordBad + 3);
  const result = before + "good" + after;
  console.log(result);
} else {
  // 5. Otherwise, log original sentence
  console.log(sentence);
}

// Test with other examples:
console.log("\n--- Testing other examples ---");

function testSentence(str) {
  const not = str.indexOf("not");
  const bad = str.indexOf("bad");

  if (not !== -1 && bad !== -1 && bad > not) {
    const result = str.substring(0, not) + "good" + str.substring(bad + 3);
    console.log(`"${str}" --> "${result}"`);
  } else {
    console.log(`"${str}" --> "${str}"`);
  }
}

testSentence("This dinner is not that bad ! You cook well");
testSentence("This movie is not so bad !");
testSentence("This dinner is bad !");
