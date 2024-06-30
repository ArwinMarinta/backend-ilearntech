const express = require("express");
const orderRoute = require("./order.route");
const router = express.Router();

router.use("/orders", orderRoute);

module.exports = router;
