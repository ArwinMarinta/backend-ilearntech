const express = require("express");
const userProfileRoute = require("./user.profile.route");
const router = express.Router();

router.use(userProfileRoute);

module.exports = router;
