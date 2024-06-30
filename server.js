// const { PORT } = require("./src/config");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./src/routes/index");
/* rateLimiter = require('./middlewares/rate.limiter'), */
const app = express();

const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* app.use(rateLimiter) */
app.use("/api/v1", router);

app.get("/test-connection", (req, res) => {
  return res.status(200).send("ok");
});

app.listen(PORT, () => {
  console.log(`Server is up and listening at port: ${PORT}`);
});
