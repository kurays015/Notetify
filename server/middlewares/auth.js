const jwt = require("jsonwebtoken");

module.exports = async function requireAuth(req, res, next) {
  const token = req.cookies?.accessToken;

  try {
    console.log("Received token:", token);

    if (!token) {
      throw new Error("Unauthorize, no token found");
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        throw new Error("Invalid credentials");
      }
      req.user = { userId: decoded.user_id };
      next();
    });
  } catch (err) {
    res.status(401).json(err.message);
  }
};
