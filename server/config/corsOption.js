const corsOptions = {
  // allowedHeaders: [
  //   "Origin",
  //   "X-Requested-With",
  //   "Content-Type",
  //   "Accept",
  //   "X-Access-Token",
  //   "Authorization",
  // ],
  credentials: true,
  // methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: `${process.env.ORIGIN}` || "http://localhost:3000",
  // NEED TO BRING THIS BACK ON DEPLOYMENT!!!!! origin: https://notetify2.vercel.app
  // preflightContinue: false,
};
//origin = frontend url

module.exports = corsOptions;
