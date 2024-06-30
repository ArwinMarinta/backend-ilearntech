const express = require("express");
const authRoute = require("./auth.route");
const authAdminRoute = require("./admin.auth.route");
const authInstructorRoute = require("./instructor.auth.route");
const router = express.Router();

router.use(authRoute);
router.use(authAdminRoute);
router.use(authInstructorRoute);

module.exports = router;
