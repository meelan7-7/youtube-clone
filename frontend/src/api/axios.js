import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

// 🔐 Attach token automatically to every request , Connect frontend with backend using axios
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = token;    // Add token-based authentication
  }

  return req;
});

export default API;