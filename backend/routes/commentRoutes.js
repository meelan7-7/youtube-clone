import express from "express";
import {
  getComments,
  addComment,
  updateComment,
  deleteComment
} from "../controllers/commentController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:videoId", getComments);
router.post("/:videoId", authMiddleware, addComment);
router.put("/:id", authMiddleware, updateComment);
router.delete("/:id", authMiddleware, deleteComment);

export default router;