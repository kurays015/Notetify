import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001", // https://notetify-server.onrender.com/
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
