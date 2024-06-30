const express = require("express");
const schema = require("../../validation/course.schema");
const validate = require("../../middlewares/validation");
const controller = require("../../controllers/course");
const { verifyToken } = require("../../middlewares/verify.token");
const checkRole = require("../../middlewares/check.role");
const router = express.Router();

router.post(
  "/",
  verifyToken,
  checkRole("admin"),
  validate(schema.content),
  controller.courseContent.createCourseContent
);
router.put(
  "/:id",
  verifyToken,
  checkRole("admin"),
  validate(schema.content),
  controller.courseContent.updateCourseContent
);
router.delete(
  "/:id",
  verifyToken,
  checkRole("admin"),
  controller.courseContent.deleteCourseContent
);

router.put(
  "/:id/publish",
  verifyToken,
  checkRole("admin"),
  controller.courseContent.unpublishContent
);
router.put(
  "/:id/demo",
  verifyToken,
  checkRole("admin"),
  controller.courseContent.demoContent
);

module.exports = router;
