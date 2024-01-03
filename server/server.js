//dependencies
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = 3001 || process.env.PORT;

//files
const todoRoute = require("./routes/todo");
const userRoute = require("./routes/user");
const requireAuth = require("./middlewares/auth");
// const corsOptions = require("./config/corsOption");
const app = express();

const corsOptions = {
  origin: "http://localhost:3000", // Replace with your frontend URL
  credentials: true, // Allow credentials (cookies)
};

//middlewares
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//require auth
app.use("/auth", userRoute);
app.use(requireAuth);

//private routes
app.use("/todos", todoRoute);

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`connected to db, listening on port ${PORT}`);
  });
});
