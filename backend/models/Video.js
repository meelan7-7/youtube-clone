import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
  thumbnailUrl: String,
  channel: { type: mongoose.Schema.Types.ObjectId, ref: "Channel" },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  category: String
}, { timestamps: true });

export default mongoose.model("Video", videoSchema);