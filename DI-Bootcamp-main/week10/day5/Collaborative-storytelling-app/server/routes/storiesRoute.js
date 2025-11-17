import { Router } from "express";
import cors from "cors";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  getStories,
  createStories,
  updateStories,
  deleteStories,
} from "../controllers/storiesController.js";

const router = Router();

router.use(
  cors({
    origin: "http://localhost:5001/", 
    credentials: true,
  })
);
router.use(authMiddleware);

router.get("/", getStories);
router.post("/", createStories);
router.put("/:id", updateStories);
router.delete("/:id", deleteStories)

export default router;
