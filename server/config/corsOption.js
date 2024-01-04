const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    `${process.env.ORIGIN}`,
  ],
  //  - frontend url
  credentials: true,
};

module.exports = corsOptions;
