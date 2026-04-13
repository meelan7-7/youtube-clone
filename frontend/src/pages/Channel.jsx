import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";
import VideoCard from "../components/VideoCard";

const Channel = () => {
  const { id } = useParams();

  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const channelRes = await API.get(`/channels/${id}`);
        setChannel(channelRes.data);

        const videosRes = await API.get(`/videos/channel/${id}`);
        setVideos(videosRes.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p style={{ padding: "20px" }}>Loading channel...</p>;

  if (!channel) return <p style={{ padding: "20px" }}>Channel not found</p>;

  return (
    <div style={{ background: "#0f0f0f", color: "white", minHeight: "100vh" }}>
      
      {/* 🎬 CHANNEL BANNER */}
      <div
        style={{
          width: "100%",
          height: "180px",
          background: "linear-gradient(to right, #202020, #303030)"
        }}
      />

      {/* 👤 CHANNEL INFO */}
      <div style={{
        padding: "20px",
        display: "flex",
        alignItems: "center",
        gap: "20px"
      }}>
        {/* Profile Circle */}
        <div style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "#444",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px"
        }}>
          {channel.channelName?.charAt(0)}
        </div>

        {/* Name + Description */}
        <div>
          <h2 style={{ margin: 0 }}>{channel.channelName}</h2>
          <p style={{ color: "#aaa", marginTop: "5px" }}>
            {channel.description}
          </p>
        </div>

        {/* Subscribe Button (UI only) */}
        <button
          style={{
            marginLeft: "auto",
            background: "red",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "20px",
            cursor: "pointer"
          }}
        >
          Subscribe
        </button>
      </div>

      <hr style={{ borderColor: "#333" }} />

      {/* 🎥 VIDEOS SECTION */}
      <div style={{ padding: "20px" }}>
        <h3>Videos</h3>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px"
          }}
        >
          {videos.length === 0 ? (
            <p>No videos in this channel</p>
          ) : (
            videos.map(video => (
              <VideoCard key={video._id} video={video} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Channel;