const corsOptions = {
  origin: `${process.env.ORIGIN}`, //  - frontend url
  credentials: true,
};

module.exports = corsOptions;
