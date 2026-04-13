import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";
import VideoCard from "../components/VideoCard";

const VideoPage = () => {
  const { id } = useParams();

  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [suggested, setSuggested] = useState([]);

  // 🎥 Fetch video + comments + suggestions
  useEffect(() => {
    API.get(`/videos/${id}`)
      .then(res => setVideo(res.data))
      .catch(err => console.log(err));

    API.get(`/comments/${id}`)
      .then(res => setComments(res.data))
      .catch(err => console.log(err));

    API.get(`/videos`)
      .then(res => setSuggested(res.data))
      .catch(err => console.log(err));
  }, [id]);

  // 👍 Like
  const handleLike = async () => {
    try {
      const res = await API.put(`/videos/${id}/like`);
      setVideo(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // 👎 Dislike
  const handleDislike = async () => {
    try {
      const res = await API.put(`/videos/${id}/dislike`);
      setVideo(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // 💬 Add comment
  const addComment = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Login first");
      return;
    }

    const res = await API.post(
      `/comments/${id}`,
      { text },
      {
        headers: {
          Authorization: token
        }
      }
    );

    setComments([...comments, res.data]);
    setText("");
  };

  // ❌ Delete comment
  const deleteComment = async (commentId) => {
    const token = localStorage.getItem("token");

    await API.delete(`/comments/${commentId}`, {
      headers: {
        Authorization: token
      }
    });

    setComments(comments.filter(c => c._id !== commentId));
  };

  // ✏️ Edit comment
  const editComment = async (commentId) => {
    const newText = prompt("Edit comment:");

    if (!newText) return;

    const token = localStorage.getItem("token");

    const res = await API.put(
      `/comments/${commentId}`,
      { text: newText },
      {
        headers: {
          Authorization: token
        }
      }
    );

    setComments(
      comments.map(c => (c._id === commentId ? res.data : c))
    );
  };

  if (!video) return <p style={{ color: "white" }}>Loading...</p>;

  return (
    <div
      style={{
        background: "#0f0f0f",
        color: "white",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >

        {/* 🎬 LEFT SIDE */}
        <div style={{ flex: 3 }}>

          {/* VIDEO */}
          <video
            src={video.videoUrl}
            controls
            style={{ width: "100%", borderRadius: "10px" }}
          />

          {/* TITLE */}
          <h2 style={{ marginTop: "10px" }}>{video.title}</h2>

          {/* ACTION BAR */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "10px",
              flexWrap: "wrap"
            }}
          >
            <button onClick={handleLike}>👍 {video.likes}</button>
            <button onClick={handleDislike}>👎 {video.dislikes}</button>
            <button>Share</button>
            <button>Download</button>
            <button>Save</button>
          </div>

          {/* DESCRIPTION */}
          <p style={{ marginTop: "10px", color: "#aaa" }}>
            {video.description}
          </p>

          {/* COMMENT BOX */}
          <div style={{ marginTop: "20px" }}>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add comment"
              style={{                              //VideoPage layout
                padding: "10px",
                width: "70%",
                background: "#181818",
                border: "none",
                color: "white"
              }}
            />
            <button style={{ marginLeft: "10px" }} onClick={addComment}>
              Add
            </button>
          </div>

          {/* COMMENTS */}
          <div style={{ marginTop: "20px" }}>
            {comments.map(c => (
              <div
                key={c._id}
                style={{
                  marginBottom: "10px",
                  borderBottom: "1px solid #333",
                  paddingBottom: "10px"
                }}
              >
                <p>{c.text}</p>
                <button onClick={() => editComment(c._id)}>Edit</button>
                <button onClick={() => deleteComment(c._id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>

        {/* 📺 RIGHT SIDE */}
        <div style={{ flex: 1 }}>
          <h3>Suggested</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {suggested
              .filter(v => v._id !== id)
              .map(v => (
                <div key={v._id} style={{ display: "flex", gap: "10px" }}>
                  <img
                    src={v.thumbnailUrl}
                    alt=""
                    style={{ width: "120px", borderRadius: "6px" }}
                  />
                  <div>
                    <p style={{ fontSize: "14px" }}>{v.title}</p>
                    <p style={{ fontSize: "12px", color: "#aaa" }}>
                      {v.views} views
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default VideoPage;