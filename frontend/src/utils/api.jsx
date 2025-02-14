import axios from "axios";

// Base API URL
const API_URL = "http://localhost:5000/api";

// Function to get token from localStorage
const getAuthToken = () => {
  return localStorage.getItem("token");
};

// Axios instance with authorization headers
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to attach token
api.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
