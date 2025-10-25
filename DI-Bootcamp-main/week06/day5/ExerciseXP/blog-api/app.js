import express from "express";

const app = express();

app.use(express.json());

const data = [
  {
    id: 1,
    title: "Herry Potter",
    author: "J.K. Rowling",
    publishedYear: 1997,
  },
  {
    id: 2,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publishedYear: 1954,
  },
  {
    id: 3,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publishedYear: 1937,
  },
];

app.get("/api/books", (req, res) => {
  res.json(data);
});

app.get("/api/books/:id", (req, res) => {
  const book = data.find((book) => book.id === parseInt(req.params.id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).send("Book not found");
  }
});

app.post("/api/books", (req, res) => {
  const book = {
    id: data.length + 1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear,
  };
  data.push(book);
  res.status(201).json(book);
});

app.listen(5000, () => console.log("Server is running on port 5000"));
