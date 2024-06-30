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
  validate(schema.module),
  controller.courseModule.createCourseModule
);
router.put(
  "/:id",
  verifyToken,
  checkRole("admin"),
  validate(schema.module),
  controller.courseModule.updateCourseModule
);
router.delete(
  "/:id",
  verifyToken,
  checkRole("admin"),
  controller.courseModule.deleteCourseModule
);

router.put(
  "/:moduleId/publish",
  verifyToken,
  checkRole("admin"),
  controller.courseModule.unpublishCourse
);

module.exports = router;
