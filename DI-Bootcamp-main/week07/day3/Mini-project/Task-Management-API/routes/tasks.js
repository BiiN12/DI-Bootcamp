import { Router } from "express";
import { body, validationResult, checkSchema } from "express-validator";
import { readFile, writeFile } from "fs/promises";
import {
  taskValidation,
  taskUpdateValidation,
} from "../utils/validationSchema.js";

const router = Router();

router.get("/tasks", async (req, res) => {
  try {
    const data = await readFile("./assets/task.json", "utf-8");
    const tasks = JSON.parse(data);

    res.json(tasks);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const raw = await readFile("./assets/task.json", "utf-8");
    const tasks = JSON.parse(raw);

    const id = parseInt(req.params.id);
    const task = tasks.find((t) => t.id == id);
    if (!task) return res.status(404).send({ error: "Task not found" });
    res.json(task);
  } catch (err) {
    return res
      .status(500)
      .send({ error: "Failed to read tasks", details: err.message || err });
  }
});

router.post("/tasks", checkSchema(taskValidation), async (req, res) => {
  try {
    const data = await readFile("./assets/task.json", "utf-8");
    const tasks = JSON.parse(data);

    // to validate
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      ...req.body,
    };
    // console.log(newTask);
    // newTask.id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;

    tasks.push(newTask);
    await writeFile("./assets/task.json", JSON.stringify(tasks, null, 2));
    res.json(tasks);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.put(
  "/tasks/:id",
  checkSchema(taskUpdateValidation),
  async (req, res) => {
    try {
      const data = await readFile("./assets/task.json", "utf-8");
      const tasks = JSON.parse(data);

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const id = parseInt(req.params.id);
      const index = tasks.findIndex((t) => t.id == id);

      if (index === -1) {
        return res.status(404).send({ error: "Task not found" });
      }
      tasks[index] = { ...tasks[index], ...req.body };

      // tasks.push(newTask);
      await writeFile("./assets/task.json", JSON.stringify(tasks, null, 2));
      res.json(tasks);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
);

router.delete("/tasks/:id", async (req, res) => {
  try {
    const data = await readFile("./assets/task.json", "utf-8");
    let tasks = JSON.parse(data);

    const id = parseInt(req.params.id);
    tasks = tasks.filter((t) => t.id !== id);

    // tasks.push(newTask);
    await writeFile("./assets/task.json", JSON.stringify(tasks, null, 2));
    res.json(tasks);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

export default router;
