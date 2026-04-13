import { useState } from "react";
import API from "../api/axios";

const UploadVideo = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    videoUrl: "",
    thumbnailUrl: "",
    category: "",
    channel: ""
  });

  const handleUpload = async () => {
    try {
      await API.post("/videos", form);
      alert("Video uploaded");
    } catch (err) {
      console.log(err);
      alert("Upload failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>       //Cleanup and optimization
      <h2>Upload Video</h2>

      <input placeholder="Title"
        onChange={(e) => setForm({ ...form, title: e.target.value })} />

      <input placeholder="Description"
        onChange={(e) => setForm({ ...form, description: e.target.value })} />

      <input placeholder="Video URL"
        onChange={(e) => setForm({ ...form, videoUrl: e.target.value })} />

      <input placeholder="Thumbnail URL"
        onChange={(e) => setForm({ ...form, thumbnailUrl: e.target.value })} />

      <input placeholder="Category"
        onChange={(e) => setForm({ ...form, category: e.target.value })} />

      <input placeholder="Channel ID"
        onChange={(e) => setForm({ ...form, channel: e.target.value })} />

      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadVideo;