import Comment from "../models/Comment.js";

export const getComments = async (req, res) => {
  const comments = await Comment.find({ video: req.params.videoId }).populate("user");
  res.json(comments);
};

export const addComment = async (req, res) => {
  const comment = await Comment.create({
    video: req.params.videoId,
    user: req.user.id,
    text: req.body.text
  });

  res.json(comment);
};

export const updateComment = async (req, res) => {
  const comment = await Comment.findByIdAndUpdate(
    req.params.id,
    { text: req.body.text },
    { new: true }
  );

  res.json(comment);
};

export const deleteComment = async (req, res) => {
  await Comment.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};