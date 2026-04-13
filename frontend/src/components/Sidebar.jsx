const Sidebar = () => {
  return (
    <div
      style={{
        width: "220px",
        background: "#0f0f0f",
        color: "white",
        height: "100vh",
        padding: "15px",
        position: "sticky",
        top: 0
      }}
    >
      {/* MAIN MENU */}      
      <div style={{ marginBottom: "20px" }}>
        <p style={{ padding: "8px", borderRadius: "8px", cursor: "pointer" }}>
          🏠 Home
        </p>
        <p style={{ padding: "8px", borderRadius: "8px", cursor: "pointer" }}>
          🔥 Trending
        </p>
        <p style={{ padding: "8px", borderRadius: "8px", cursor: "pointer" }}>
          📺 Subscriptions
        </p>
        <p style={{ padding: "8px", borderRadius: "8px", cursor: "pointer" }}>
          📚 Library
        </p>
      </div>

      <hr style={{ borderColor: "#333" }} />

      {/* CATEGORY SECTION ( UI ONLY ) */} 
      <div style={{ marginTop: "20px" }}>
        <p style={{ fontSize: "14px", color: "#aaa" }}>Explore</p>

        <p style={{ padding: "8px", cursor: "pointer" }}>🎵 Music</p>
        <p style={{ padding: "8px", cursor: "pointer" }}>🎮 Gaming</p>
        <p style={{ padding: "8px", cursor: "pointer" }}>📰 News</p>
        <p style={{ padding: "8px", cursor: "pointer" }}>🏀 Sports</p>
      </div>
    </div>
  );
};

export default Sidebar;