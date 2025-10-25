import express from "express";
import fetchPosts from "./data/dataService.js";

const app = express();

app.use(express.json());

app.get("/posts", async (req, res) => {
  const posts = await fetchPosts();
  res.json(posts);
  console.log("Successfully fetched posts");
});

app.listen(5000, () => console.log("Server is running on port 5000"));
