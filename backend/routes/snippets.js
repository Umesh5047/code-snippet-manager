import express from "express";
import { getSnippets, createSnippet } from "../controllers/snippetsController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getSnippets);
router.post("/", authMiddleware, createSnippet);

export default router;