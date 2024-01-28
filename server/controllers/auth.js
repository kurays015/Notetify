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
  const { email, password, confirmPassword } = req.body;
  const user = await User.findOne({ email });
  try {
    if (user) {
      throw new Error("Email is already in use");
    }
    if (!email || !password || !confirmPassword) {
      throw new Error("All fields are required");
    }
    if (password !== confirmPassword) {
      throw new Error("Password doesn't match!");
    }
    if (!validator.isEmail(email)) {
      throw new Error("Invalid email");
    }
    if (!validator.isStrongPassword(password)) {
      throw new Error("Strong password is required");
    }
    // Hash
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = await User.create({ email, password: hashedPassword });

    const payload = { user_id: newUser._id };
    const accessToken = generateAccessToken(payload);

    res
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
        maxAge: MAX_AGE * 1000,
        sameSite: "none",
        path: "/",
      })
      .status(200)
      .json(newUser._id);
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

    res
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
        maxAge: MAX_AGE,
        sameSite: "none",
        path: "/",
      })
      .status(200)
      .json("Successfully logged in!");
  } catch (err) {
    res.status(500).json(err.message);
  }
}

async function logout(req, res) {
  res.clearCookie("accessToken");
  res.status(200).json("Logout success");
}

module.exports = { register, login, logout };
