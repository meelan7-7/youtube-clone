import express from "express";
import {
  getVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
  likeVideo,
  dislikeVideo,
  getVideosByChannel
} from "../controllers/videoController.js";

const router = express.Router();

// 🎯 Channel videos (IMPORTANT: keep above /:id)
router.get("/channel/:channelId", getVideosByChannel);

// 👍 👎 Like / Dislike
router.put("/:id/like", likeVideo);
router.put("/:id/dislike", dislikeVideo);

// 🎥 Video CRUD
router.get("/", getVideos);
router.get("/:id", getVideoById);
router.post("/", createVideo);
router.put("/:id", updateVideo);
router.delete("/:id", deleteVideo);

export default router;