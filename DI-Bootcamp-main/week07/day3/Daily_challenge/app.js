import express from "express";
import userRegister from "./routes/register.js";
import userLogin from "./routes/login.js";
import users from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(userRegister);
app.use(userLogin);
app.use(users);

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
