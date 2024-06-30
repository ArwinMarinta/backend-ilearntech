const express = require("express");
const authRoute = require("./auth");
const courseRoute = require("./course");
const courseDiscussion = require("./course.discussion");
const analyticRoute = require("./analytic");
const orderRoute = require("./order");
const userCoursesRoute = require("./user.course");
const userProfileRoute = require("./user.profile");
const notificationRoute = require("./notification");
const userLearningProgress = require("./user.learning.progress");
const router = express.Router();

router.use("/auth", authRoute);
router.use(courseDiscussion);
router.use(courseRoute);
router.use(analyticRoute);
router.use(orderRoute);
router.use(userCoursesRoute);
router.use("/profile", userProfileRoute);
router.use("/notifications", notificationRoute);
router.use("/learning-progress", userLearningProgress);

module.exports = router;
