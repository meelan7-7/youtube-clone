import { Link } from "react-router-dom";

const Header = ({ setSearch }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "#0f0f0f",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}
    >
      {/* 🔴 LOGO */}
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h2 style={{ margin: 0 }}>
          <span style={{ color: "red" }}>You</span>Tube
        </h2>
      </Link>

      {/* 🔍 SEARCH BAR */}
      <div style={{ width: "50%", display: "flex" }}>
        <input
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "8px 12px",
            borderRadius: "20px 0 0 20px",
            border: "1px solid #303030",
            outline: "none",
            background: "#121212",
            color: "white"
          }}
        />
        <button
          style={{
            padding: "8px 15px",
            borderRadius: "0 20px 20px 0",
            border: "1px solid #303030",
            background: "#222",
            color: "white",
            cursor: "pointer"
          }}
        >
          🔍
        </button>
      </div>

      {/* 👤 RIGHT SIDE */}
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/upload">
          <button style={{ cursor: "pointer" }}>Upload</button>
        </Link>

        <Link to="/create-channel">
          <button style={{ cursor: "pointer" }}>Channel</button>
        </Link>

        <Link to="/login">
          <button style={{ cursor: "pointer" }}>Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;