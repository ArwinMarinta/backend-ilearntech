const express = require("express");
const schema = require("../../validation/auth.schema");
const validate = require("../../middlewares/validation");
const { verifyToken } = require("../../middlewares/verify.token");
const checkRole = require("../../middlewares/check.role");
const controller = require("../../controllers/auth");
const multer = require("multer")();
const router = express.Router();

router.post(
  "/instructor/register",
  verifyToken,
  multer.single("photoInstructor"),
  validate(schema.registerInstructor),
  checkRole("admin"),
  controller.authInstructor.register
);
/* router.post('/instructor/register', verifyToken, multer.single('photoInstructor'),  validate(schema.registerInstructor), checkRole('admin'), controller.authInstructor.register) */
router.post("/instructor/login", controller.authInstructor.login);
router.post(
  "/instructor/change-password",
  verifyToken,
  checkRole("instructor"),
  validate(schema.changePassword),
  controller.authInstructor.changePassword
);

module.exports = router;
