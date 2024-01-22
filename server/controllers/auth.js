//dependencies
const bcrypt = require("bcrypt");
const validator = require("validator");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const MAX_AGE = 60 * 60 * 24 * 30; // 30DAYS

function generateAccessToken(payload) {
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "7d" });
}

async function register(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  try {
    if (user) {
      throw new Error("Email is already in use");
    }
    if (!email || !password) {
      throw new Error("All field are required");
    }
    if (!validator.isEmail(email)) {
      throw new Error("Invalid email");
    }
    if (!validator.isStrongPassword(password)) {
      throw new Error("Strong password is required");
    }

    if (password && validator.isStrongPassword(password)) {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);
      await User.create({ email, password: hashedPassword });
      res.status(201).json("New user Created");
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  try {
    if (!user) {
      throw new Error("User doesn't exist");
    }

    if (!email || !password) {
      throw new Error("All field are required");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Incorrect password");
    }
    const payload = { user_id: user._id };
    const accessToken = generateAccessToken(payload);
<<<<<<< HEAD

    res
      .cookie("accessToken", accessToken, {
        httpOnly: true,
<<<<<<< HEAD
        // secure: true,
        // maxAge: MAX_AGE,
        // sameSite: "strict",
        // path: "/",
=======
        secure: true,
        maxAge: MAX_AGE,
        // sameSite: "strict",
        path: "/",
>>>>>>> 039f57e62f9a5af33eedd01595c4dc07549e5237
      })
      .status(200)
      .json(user._id);
=======
    res.status(200).json(accessToken);
>>>>>>> 9dd02141401f34b42ee8f1f32f196c27d9074666
  } catch (err) {
    res.status(500).json(err.message);
  }
}

async function logout(req, res) {
  res.clearCookie("accessToken");
  res.status(200).json("Logout success");
}

module.exports = { register, login, logout };
