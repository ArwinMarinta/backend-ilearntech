// const { PORT } = require("./src/config");

const express = require("express"),
  // { PORT } = require("./src/config"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  router = require("./src/routes/index"),
  /* rateLimiter = require('./middlewares/rate.limiter'), */
  app = express();

const PORT = 5000;

const corsConfig = {
  origin: "",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsConfig));
app.options("", cors(corsConfig));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

/* app.use(rateLimiter) */
app.use("/api/v1", router);

app.get("/test-connection", (req, res) => {
  return res.status(200).send("ok");
});

app.listen(PORT, () => {
  console.log(`Server is up and listening at port: ${PORT}`);
});
