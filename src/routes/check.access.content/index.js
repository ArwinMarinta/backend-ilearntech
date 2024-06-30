const express = require("express");
const checkAccessRoute = require("./checkAccess.route");
const router = express.Router();

router.use("/check-access", checkAccessRoute);

module.exports = router;
