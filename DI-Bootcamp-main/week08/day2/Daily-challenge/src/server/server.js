import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello from the server!" });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send({ message: `I received your POST request: ${req.body.post}` });
});

app.options("api/world", cors());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
