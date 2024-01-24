const corsOptions = {
  credentials: true,
  origin: `${process.env.ORIGIN}`,
  // NEED TO BRING THIS BACK ON DEPLOYMENT!!!!! origin: https://notetify2.vercel.app
};
//origin = frontend url

module.exports = corsOptions;
