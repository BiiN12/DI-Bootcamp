import express from "express";
import tasksRouter from "./routes/tasks.js";

const app = express();

app.use(express.json());
app.use(tasksRouter);

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
