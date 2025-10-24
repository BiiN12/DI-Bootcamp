import { Router } from "express";
import cors from "cors";
import { body, validationResult } from "express-validator";
import { readFile } from "fs/promises";
import bcrypt from "bcrypt";

const router = Router();
router.use(cors());

router.post(
  "/login",
  [
    body("username")
      .isLength({ min: 5, max: 32 })
      .withMessage("Username must be at least 5 and max of 32 character!")
      .notEmpty()
      .withMessage("Username cannot be empty!"),
    body("password")
      .isLength({ min: 4, max: 32 })
      .withMessage("Password must be at least 4 and max of 32 character!")
      .notEmpty()
      .withMessage("Password cannot be empty!"),
  ],
  async (req, res) => {
    try {
      const data = await readFile("./models/users.json", "utf-8");
      const users = JSON.parse(data);

      const result = validationResult(req);
      if (!result.isEmpty()) {
        console.log(result);
        return res.status(400).send({ errors: result.array() });
      }

      const { username, password } = req.body;
      const user = users.find((u) => u.username == username);

      if (!user) res.status(404).send({ error: "User not found!" });
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: "Wrong password!" });
      }

      res
        .status(200)
        .json({ message: "Welcome back!", firstName: user.firstName });
    } catch (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }
);

router.options("/login", cors());

export default router;
