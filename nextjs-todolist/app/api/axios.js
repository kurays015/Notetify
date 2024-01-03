import axios from "axios";

export default axios.create({
  baseURL: `${
    "https://notetify-server.onrender.com/" || "http://localhost:3001"
  }`,
  withCredentials: true,
});
