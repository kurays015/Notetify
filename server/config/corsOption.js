const corsOptions = {
  origin: ["http://localhost:3000", `${process.env.ORIGIN}`],
  //  - frontend url
  credentials: true,
};

module.exports = corsOptions;
