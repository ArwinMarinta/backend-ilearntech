const express = require("express");
const { verifyToken } = require("../../middlewares/verify.token");
const controller = require("../../controllers/user.course");
const router = express.Router();

router.get("/", verifyToken, controller.userCourse.getUserCoursesByIdUser);
router.get(
  "/:userCourseId",
  verifyToken,
  controller.userCourse.getUserCoursesByIdUserCourse
);

module.exports = router;
