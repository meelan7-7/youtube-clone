import { useEffect, useState } from "react";
import API from "../api/axios";
import VideoCard from "../components/VideoCard";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    API.get("/videos")
      .then(res => {
        console.log("VIDEOS:", res.data);
        setVideos(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  // 🔍 + 🎯 FILTER LOGIC
  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || video.category === category;

    return matchesSearch && matchesCategory;
  });
       //Improve UI styling
  return (
    <div style={{ background: "#0f0f0f", minHeight: "100vh", color: "white" }}>
      
      {/* HEADER */}
      <Header setSearch={setSearch} />

      <div style={{ display: "flex" }}>
        
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */} 
        <div
          style={{
            flex: 1,
            padding: "10px 20px",
            maxWidth: "1200px",   // ✅ FIX:prevents stretching
            margin: "0 auto"      // ✅ centers content like YouTube 
          }}
        >

          {/* 🎯 FILTER BUTTONS */}
          <div
            style={{
              display: "flex",
              gap: "10px",                     
              overflowX: "auto",
              paddingBottom: "10px"
            }}
          >
            {["all", "education", "frontend", "backend", "css", "react"].map(cat => (                 //Home page UI
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                style={{
                  padding: "6px 14px",
                  borderRadius: "20px",
                  border: "none",
                  cursor: "pointer",
                  background: category === cat ? "white" : "#272727",
                  color: category === cat ? "black" : "white",
                  whiteSpace: "nowrap",
                  fontSize: "13px"
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 🎥 VIDEO GRID */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              marginTop: "10px",
              justifyContent: "flex-start" // ✅ aligns grid nicely
            }}
          >
            {filteredVideos.length === 0 ? (
              <p style={{ padding: "20px" }}>No results found</p>
            ) : (
              filteredVideos.map(video => (
                <VideoCard key={video._id} video={video} />
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;