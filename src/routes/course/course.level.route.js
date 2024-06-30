const express = require("express");
const schema = require("../../validation/course.schema");
const validate = require("../../middlewares/validation");
const controller = require("../../controllers/course");
const { verifyToken } = require("../../middlewares/verify.token");
const checkRole = require("../../middlewares/check.role");
const router = express.Router();

router.get("/", controller.courseLevel.getAll);
router.get("/:id", controller.courseLevel.getById);
router.post(
  "/",
  validate(schema.level),
  verifyToken,
  checkRole("admin"),
  controller.courseLevel.create
);
router.put(
  "/:id",
  validate(schema.level),
  verifyToken,
  checkRole("admin"),
  controller.courseLevel.update
);
router.delete("/:id", verifyToken, checkRole("admin"), controller.courseLevel.delete);

module.exports = router;
