import { Router } from "express";
import cors from "cors";
import { body, validationResult } from "express-validator";
import { readFile, writeFile } from "fs/promises";
import bcrypt from "bcrypt";
const saltRounds = 10;

const router = Router();
router.use(cors());

router.post(
  "/register",
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

      if (
        users.find(
          (u) => u.username.toLowerCase() == req.body.username.toLowerCase()
        )
      ) {
        return res.status(400).send({ error: "Username already exists!" });
      }

      const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        ...req.body,
      };

      newUser.password = await bcrypt.hash(newUser.password, saltRounds);
      //   console.log(newUser.password);

      users.push(newUser);

      await writeFile("./models/users.json", JSON.stringify(users, null, 2));
      res.status(201).json({ message: "Successfully registered!" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

router.options("/register", cors());

export default router;
