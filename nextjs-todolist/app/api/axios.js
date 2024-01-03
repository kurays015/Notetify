import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// https://notetify-server.onrender.com/
