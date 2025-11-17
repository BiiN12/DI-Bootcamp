import { Router } from "express";
import cors from "cors";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  getContributor,
  addContributor,
  deleteContributor,
} from "../controllers/contributorsController.js";

const router = Router();

router.use(
  cors({
    origin: "http://localhost:5001/",
    credentials: true,
  })
);
router.use(authMiddleware);

router.get("/:story_id", getContributor);
router.post("/", addContributor);
router.delete("/:id", deleteContributor);

export default router;
