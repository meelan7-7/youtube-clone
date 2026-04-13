import express from "express";
import {
  createChannel,
  getAllChannels,
  getMyChannel,
  getChannelById
} from "../controllers/channelController.js";

import auth from "../middleware/authMiddleware.js";

const router = express.Router();

// ➕ Create channel (protected)
router.post("/", auth, createChannel);

// 👤 Get my channel (protected)
router.get("/me", auth, getMyChannel);

// 📺 Get all channels
router.get("/", getAllChannels);

// 📺 Get channel by ID (VERY IMPORTANT)
router.get("/:id", getChannelById);

export default router;