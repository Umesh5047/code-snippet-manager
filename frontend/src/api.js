import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const getSnippets = async () => {
  const res = await axios.get(`${API_BASE}/snippets`);
  return res.data;
};

export const createSnippet = async (snippet, token) => {
  const res = await axios.post(`${API_BASE}/snippets`, snippet, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};

export const registerUser = async (user) => {
  const res = await axios.post(`${API_BASE}/auth/register`, user);
  return res.data;
};

export const loginUser = async (user) => {
  const res = await axios.post(`${API_BASE}/auth/login`, user);
  return res.data;
};
