const express = require("express");
const schema = require("../../validation/auth.schema");
const validate = require("../../middlewares/validation");
const controller = require("../../controllers/auth");
const multer = require("multer")();
const { verifyToken } = require("../../middlewares/verify.token");
const checkRole = require("../../middlewares/check.role");
const router = express.Router();

router.get("/", verifyToken, controller.auth.getProfile);
router.put(
  "/",
  verifyToken,
  checkRole("user"),
  validate(schema.updateProfile),
  controller.auth.updateProfile
);
router.put(
  "/images",
  verifyToken,
  checkRole("user"),
  validate(schema.updateProfilePhoto),
  multer.single("photoProfile"),
  controller.auth.updateProfilePhoto
);

module.exports = router;
