const express = require("express");
const schema = require("../../validation/auth.schema");
const validate = require("../../middlewares/validation");
const { verifyToken } = require("../../middlewares/verify.token");
const checkRole = require("../../middlewares/check.role");
const controller = require("../../controllers/auth");
const router = express.Router();

router.post("/register", validate(schema.register), controller.auth.register);
router.post("/login", validate(schema.login), controller.auth.login);
router.post("/login-admin", validate(schema.login), controller.auth.loginAdmin);
router.post("/verify-user", validate(schema.verifyUser), controller.auth.verifyUser);
router.post(
  "/request-reset-password",
  validate(schema.requestResetPassword),
  controller.auth.requestResetPassword
);
router.post(
  "/reset-password",
  validate(schema.resetPassword),
  controller.auth.resetPassword
);
router.post("/resend-otp", validate(schema.resendOtp), controller.auth.resendOtp);
router.post(
  "/change-password",
  verifyToken,
  validate(schema.changePassword),
  checkRole("user"),
  controller.auth.changePassword
);

/* Google Auth */
router.post("/google", validate(schema.googleLogin), controller.auth.googleLogin);
/* router.get("/google/callback", controller.auth.googleCallbackLogin); */

module.exports = router;
