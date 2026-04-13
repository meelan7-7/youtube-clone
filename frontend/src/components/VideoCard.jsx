import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <div
      style={{
        width: "300px",
        cursor: "pointer",
        color: "white",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <Link
        to={`/video/${video._id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        {/* 🎬 THUMBNAIL */}
        <img
          src={video.thumbnailUrl}
          alt="thumbnail"
          style={{
            width: "100%",
            height: "170px",
            objectFit: "cover",
            borderRadius: "12px"
          }}
        />

        {/* 📄 VIDEO INFO */}
        <div style={{ marginTop: "8px" }}>
          <h4
            style={{
              margin: "0",
              fontSize: "15px",
              lineHeight: "1.4",
              fontWeight: "500"
            }}
          >
            {video.title}
          </h4>

          {/* 🧑 CHANNEL NAME */}
          <p
            style={{
              margin: "4px 0 0 0",
              fontSize: "13px",
              color: "#aaa"
            }}
          >
            {video.channel?.channelName || "Unknown Channel"}
          </p>

          {/* 👁 VIEWS */}
          <p
            style={{
              margin: "2px 0",
              fontSize: "12px",
              color: "#777"
            }}
          >
            {video.views || 0} views
          </p>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;