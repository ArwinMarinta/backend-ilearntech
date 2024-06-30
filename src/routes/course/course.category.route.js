const express = require("express");
const schema = require("../../validation/course.schema");
const validate = require("../../middlewares/validation");
const controller = require("../../controllers/course");
const multer = require("multer")();
const checkRole = require("../../middlewares/check.role");
const { verifyToken } = require("../../middlewares/verify.token");
const router = express.Router();

router.get("/", controller.courseCategory.getAll);
router.get("/:id", controller.courseCategory.getById);
router.post(
  "/",
  multer.single("photoCategory"),
  verifyToken,
  checkRole("admin"),
  validate(schema.category),
  controller.courseCategory.create
);
router.put(
  "/:id",
  multer.single("photoCategory"),
  verifyToken,
  checkRole("admin"),
  validate(schema.category),
  controller.courseCategory.update
);
router.delete("/:id", verifyToken, checkRole("admin"), controller.courseCategory.delete);

module.exports = router;
