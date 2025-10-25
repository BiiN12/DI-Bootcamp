import express from "express";

const app = express();

app.use(express.json());

const data = [
  {
    id: 1,
    title: "My first blog post",
    content: "This is the first blog post",
  },
  {
    id: 2,
    title: "My second blog post",
    content: "This is the second blog post",
  },
  {
    id: 3,
    title: "My third blog post",
    content: "This is the third blog post",
  },
];

app.get("/posts", (req, res) => {
  res.json(data);
});

app.get("/posts/:id", (req, res) => {
  const post = data.find((post) => post.id === parseInt(req.params.id));
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

app.post("/posts", (req, res) => {
  const newPost = {
    id: data.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  data.push(newPost);
  res.status(201).json(newPost);
});

app.put("/posts/:id", (req, res) => {
  const post = data.find((post) => post.id === parseInt(req.params.id));
  if (post) {
    post.title = req.body.title;
    post.content = req.body.content;
    res.json(post);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

app.delete("/posts/:id", (req, res) => {
  const post = data.find((post) => post.id === parseInt(req.params.id));
  if (post) {
    data.splice(data.indexOf(post), 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

app.listen(3000, () => console.log("Server is running on port 3000"));
