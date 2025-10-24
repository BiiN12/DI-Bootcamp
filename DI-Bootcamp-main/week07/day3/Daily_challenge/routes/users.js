import { Router } from "express";
import { readFile, writeFile } from "fs/promises";

const router = Router();

router.get("/users", async (req, res) => {
  try {
    const data = await readFile("./models/users.json", "utf-8");
    const users = JSON.parse(data);

    res.json(users);
  } catch (err) {
    res.send(err);
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const data = await readFile("./models/users.json", "utf-8");
    const users = JSON.parse(data);

    const id = parseInt(req.params.id);
    const user = users.find((u) => u.id == id);
    if (!user) {
      return res.status(401).send("User not found!");
    }

    res.json(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    const data = await readFile("./models/users.json", "utf-8");
    let users = JSON.parse(data);

    const id = parseInt(req.params.id);
    const index = users.findIndex((u) => u.id == id);
    if (index == -1) {
      return res.status(404).send("User not found!");
    }

    const { id: _, ...updates } = req.body;
    users[index] = { ...users[index], ...updates };

    await writeFile("./models/users.json", JSON.stringify(users, null, 2));
    res.send("User successfully updated!");
  } catch (err) {
    res.status(500).send({ error: "Unable to update user" });
  }
});

export default router;
