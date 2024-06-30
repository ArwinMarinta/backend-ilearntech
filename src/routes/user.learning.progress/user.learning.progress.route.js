const express = require("express");
const controller = require("../../controllers/user.learning.progress");
const { verifyToken } = require("../../middlewares/verify.token");
const checkRole = require("../../middlewares/check.role");
const router = express.Router();

router.put(
  "/:userCourseId/contents/:contentId",
  verifyToken,
  checkRole("user"),
  controller.userLearningProgress.updateLearningProgress
);
router.get(
  "/:userCourseId/contents/:contentId",
  verifyToken,
  checkRole("user"),
  controller.userLearningProgress.getLearningProgress
);

module.exports = router;
