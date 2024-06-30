const express = require("express");
const notificationRoute = require("./notification.route");
const router = express.Router();

router.use(notificationRoute);

module.exports = router;
