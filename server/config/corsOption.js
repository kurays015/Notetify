module.exports = corsOptions = {
  origin: `${process.env.LIVE || process.env.LOCAL}`, // Replace with your frontend URL
  credentials: true, // Allow credentials (cookies)
};
