let currentWords = {};
let currentStoryIndex = 0;

const stories = [
  "Yesterday, {person} went to {place} to find a {adjective} {noun}. When they arrived, they had to {verb} for hours!",
  "The {adjective} {noun} belonged to {person}. They decided to {verb} all the way to {place} with it.",
  "At {place}, {person} discovered the most {adjective} {noun} ever seen. Everyone wanted to {verb} when they saw it!",
];

document.getElementById("libform").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get values
  const noun = document.getElementById("noun").value.trim();
  const adjective = document.getElementById("adjective").value.trim();
  const person = document.getElementById("person").value.trim();
  const verb = document.getElementById("verb").value.trim();
  const place = document.getElementById("place").value.trim();

  // Check if values are empty
  if (!noun || !adjective || !person || !verb || !place) {
    alert("Please fill in all fields!");
    return;
  }

  // Store words
  currentWords = { noun, adjective, person, verb, place };

  // Generate story
  generateStory();

  // Show shuffle button
  document.getElementById("shuffle-button").style.display = "inline-block";
});

document
  .getElementById("shuffle-button")
  .addEventListener("click", function () {
    currentStoryIndex = (currentStoryIndex + 1) % stories.length;
    generateStory();
  });

function generateStory() {
  let story = stories[currentStoryIndex];

  // Replace placeholders with user words
  story = story.replace(/{noun}/g, currentWords.noun);
  story = story.replace(/{adjective}/g, currentWords.adjective);
  story = story.replace(/{person}/g, currentWords.person);
  story = story.replace(/{verb}/g, currentWords.verb);
  story = story.replace(/{place}/g, currentWords.place);

  document.getElementById("story").textContent = story;
}
