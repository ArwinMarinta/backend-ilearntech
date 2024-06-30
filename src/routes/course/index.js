const express = require("express");
const instructorRoute = require("./course.instructor.route");
const courseRoute = require("./course.route");
const promoRoute = require("./course.promo.route");
const moduleRoute = require("./course.module.route");
const contentRoute = require("./course.content.route");
const typeRoute = require("./course.type.route");
const categoryRoute = require("./course.category.route");
const levelRoute = require("./course.level.route");
const testimonialRoute = require("./course.testimonial.route");
const router = express.Router();

router.use("/courses", courseRoute);
router.use("/course-modules", moduleRoute);
router.use("/course-contents", contentRoute);
router.use("/course-instructors", instructorRoute);
router.use("/course-promos", promoRoute);
router.use("/course-types", typeRoute);
router.use("/course-categories", categoryRoute);
router.use("/course-levels", levelRoute);
router.use("/course-testimonials", testimonialRoute);

module.exports = router;
