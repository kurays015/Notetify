const jwt = require("jsonwebtoken");

module.exports = async function requireAuth(req, res, next) {
   try {
    const authorizationHeader = req.headers['authorization'];
   console.log(authorizationHeader)
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      throw new Error('Unauthorized, no token found');
    }

    const token = authorizationHeader.split(' ')[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        throw new Error('Invalid credentials');
      }
      req.user = { userId: decoded.user_id };
      next();
    });
  } catch (err) {
    res.status(401).json(err.message);
  }
};
