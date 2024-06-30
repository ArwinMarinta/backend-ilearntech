const express = require("express");
const schema = require("../../validation/course.schema");
const validate = require("../../middlewares/validation");
const { verifyToken } = require("../../middlewares/verify.token");
const controller = require("../../controllers/course");
const checkRole = require("../../middlewares/check.role");
const { courseTestimonialMiddleware } = require("../../middlewares/course.middleware");
const router = express.Router();

router.post(
  "/:courseId",
  verifyToken,
  courseTestimonialMiddleware,
  checkRole("user"),
  validate(schema.testimonial),
  controller.courseTestimonial.createTestimonial
);
router.get("/:courseId", controller.courseTestimonial.readTestimonialByCourseId);
router.put(
  "/:testimonialId/courses/:courseId",
  verifyToken,
  courseTestimonialMiddleware,
  checkRole("user"),
  validate(schema.testimonial),
  controller.courseTestimonial.updateTestimonial
);

module.exports = router;
