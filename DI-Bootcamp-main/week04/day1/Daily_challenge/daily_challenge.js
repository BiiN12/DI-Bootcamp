const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

// 1
const username = [];
gameInfo.forEach((user) => {
  username.push(`${user.username}!`);
});
console.log(username);

// 2
const winners = [];
gameInfo.forEach((user) => {
  if (user.score > 5) {
    winners.push(user.username);
  }
});
console.log(winners);

// 3
const totalScore = gameInfo.reduce((acc, user) => acc + user.score, 0);
console.log(totalScore);
