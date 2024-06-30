const express = require("express");
const schema = require("../../validation/course.schema");
const validate = require("../../middlewares/validation");
const controller = require("../../controllers/course");
const { verifyToken } = require("../../middlewares/verify.token");
const checkRole = require("../../middlewares/check.role");
const router = express.Router();

router.get("/", controller.coursePromo.getAll);
router.get("/:id", controller.coursePromo.getById);

router.post(
  "/",
  verifyToken,
  checkRole("admin"),
  validate(schema.promo),
  controller.coursePromo.create
);
router.put(
  "/:id",
  verifyToken,
  checkRole("admin"),
  validate(schema.promo),
  controller.coursePromo.update
);
router.delete("/:id", verifyToken, checkRole("admin"), controller.coursePromo.delete);

module.exports = router;
