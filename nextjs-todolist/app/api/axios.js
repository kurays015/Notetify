import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080", // https://notetify-server.onrender.com/
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
