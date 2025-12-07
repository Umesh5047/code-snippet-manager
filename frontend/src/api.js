import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getSnippets = () => api.get("/snippets").then(res => res.data);
export const createSnippet = (snippet) => api.post("/snippets", snippet).then(res => res.data);
export const registerUser = (user) => api.post("/auth/register", user).then(res => res.data);
export const loginUser = (user) => api.post("/auth/login", user).then(res => res.data);