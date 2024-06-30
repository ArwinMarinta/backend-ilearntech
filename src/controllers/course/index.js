const course = require("./course.controller")
 const courseInstructor = require("./course.instructor.controller")
 const coursePromo = require("./course.promo.controller")
 const courseModule = require("./course.module.controller")
 const courseContent = require("./course.content.controller")
 const courseCategory = require("./course.category.controller")
 const courseType = require("./course.type.controller")
 const courseLevel = require("./course.level.controller")
  const courseTestimonial = require('./course.testimonial')

module.exports = {
  course,
  courseInstructor,
  coursePromo,
  courseModule,
  courseContent,
  courseCategory,
  courseType,
  courseLevel,
  courseTestimonial
};
