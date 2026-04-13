import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import VideoPage from "../pages/VideoPage";
import Channel from "../pages/Channel";
import CreateChannel from "../pages/CreateChannel";
import UploadVideo from "../pages/UploadVideo"; // ✅ NEW IMPORT

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/channel/:id" element={<Channel />} />

        {/* Existing */}
        <Route path="/create-channel" element={<CreateChannel />} />

        {/* ✅ NEW ROUTE */}
        <Route path="/upload" element={<UploadVideo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;