const express = require("express");
const { verifyToken } = require("../../middlewares/verify.token");
const checkRole = require("../../middlewares/check.role");
const controller = require("../../controllers/course.discussion");
const router = express.Router();

router.get(
  "/course-discussions",
  verifyToken,
  checkRole("admin", "instructor"),
  controller.courseDiscussion.getAllCourseDiscussion
);
router.get(
  "/course-discussions/instructors",
  verifyToken,
  checkRole("admin"),
  controller.courseDiscussion.getCourseDiscussionByIdInstructor
);

module.exports = router;
