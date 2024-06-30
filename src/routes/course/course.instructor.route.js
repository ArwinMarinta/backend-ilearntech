const express = require("express");
const schema = require("../../validation/course.schema");
const validate = require("../../middlewares/validation");
const controller = require("../../controllers/course");
const { verifyToken } = require("../../middlewares/verify.token");
const checkRole = require("../../middlewares/check.role");
const multer = require("multer")();
const router = express.Router();

router.get("/:id", controller.courseInstructor.readById);
router.get("/", controller.courseInstructor.read);
router.put(
  "/:id",
  verifyToken,
  multer.single("photoInstructor"),
  validate(schema.registerInstructor),
  checkRole("admin"),
  controller.courseInstructor.update
);
router.delete(
  "/:id",
  verifyToken,
  checkRole("admin"),
  controller.courseInstructor.delete
);

module.exports = router;
