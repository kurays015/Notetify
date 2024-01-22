//dependencies
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = 8080 || process.env.PORT;

//files
const todoRoute = require("./routes/todo");
const userRoute = require("./routes/user");
const requireAuth = require("./middlewares/auth");
const app = express();
<<<<<<< HEAD

=======
>>>>>>> 9dd02141401f34b42ee8f1f32f196c27d9074666
//middlewares

app.use(cookieParser());
<<<<<<< HEAD
app.use(helmet());
app.use(morgan("dev"));
app.use(cors(corsOptions));
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
