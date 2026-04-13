import Channel from "../models/Channel.js";

// ➕ Create Channel
export const createChannel = async (req, res) => {
  try {
    const channel = await Channel.create({
      channelName: req.body.channelName,
      owner: req.user.id,
      description: req.body.description
    });

    res.json(channel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📺 Get Channel by ID (USED IN FRONTEND)
export const getChannelById = async (req, res) => {
  try {
    const channel = await Channel.findById(req.params.id).populate("owner");

    if (!channel) {
      return res.status(404).json({ message: "Channel not found" });
    }

    res.json(channel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 👤 Get My Channel ( LOGGED IN USER )
export const getMyChannel = async (req, res) => {
  try {
    const channel = await Channel.findOne({ owner: req.user.id });

    if (!channel) {
      return res.status(404).json({ message: "No channel found" });
    }

    res.json(channel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📺 Get All Channels
export const getAllChannels = async (req, res) => {
  try {
    const channels = await Channel.find();
    res.json(channels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};