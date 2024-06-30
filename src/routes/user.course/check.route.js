const express = require("express");
const { verifyToken } = require("../../middlewares/verify.token");
const controller = require("../../controllers/user.course/check.controller");
const router = express.Router();

router.get("/check/courses/:courseId", verifyToken, controller.checkUserCourse);
router.get(
  "/check-access/courses/:courseId/modules/:moduleId/contents/:contentId",
  verifyToken,
  controller.checkAccess
);
router.get(
  "/check-finished-content/user-courses/:userCourseId/contents/:contentId",
  verifyToken,
  controller.checkStatusFinsihed
);

module.exports = router;
