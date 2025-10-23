import { users } from "./data.mjs";

const calculateAverageAge = (users) => {
  const totalAge = users.reduce((acc, user) => acc + user.age, 0);
  return totalAge / users.length;
};

console.log(calculateAverageAge(users));
