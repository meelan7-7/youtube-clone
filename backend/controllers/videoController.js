import Video from "../models/Video.js";

// 📺 Get all videos
export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate("channel");
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🎥 Get single video
export const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id).populate("channel");

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ➕ Create video
export const createVideo = async (req, res) => {
  try {
    const video = await Video.create(req.body);
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✏️ Update video
export const updateVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ❌ Delete video
export const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 👍 Like video
export const likeVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    video.likes = (video.likes || 0) + 1;

    await video.save();
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 👎 Dislike video
export const dislikeVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    video.dislikes = (video.dislikes || 0) + 1;

    await video.save();
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📺 Get videos by channel (SMART VERSION 🔥)
export const getVideosByChannel = async (req, res) => {
  try {
    const { channelId } = req.params;

    // 🔥 Support BOTH field names
    const videos = await Video.find({
      $or: [
        { channel: channelId },
        { channelId: channelId }
      ]
    }); 

    res.json(videos);
  } catch (error)  {
    res.status(500).json({ message: error.message });
  }
};