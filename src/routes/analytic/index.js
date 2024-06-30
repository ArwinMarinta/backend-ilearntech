const express = require("express");
const analyticRoute = require("./analytics.route");
const router = express.Router();

router.use("/analytics", analyticRoute);

module.exports = router;
