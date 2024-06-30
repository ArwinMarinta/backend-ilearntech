const express = require("express");
const schema = require("../../validation/notification.schema");
const validate = require("../../middlewares/validation");
const { verifyToken } = require("../../middlewares/verify.token");
const checkRole = require("../../middlewares/check.role");
const controller = require("../../controllers/notification");
const router = express.Router();

router.get(
  "/",
  verifyToken,
  checkRole("user"),
  controller.notification.getNotificationByUserId
);
router.put(
  "/",
  verifyToken,
  checkRole("user"),
  validate(schema.notification),
  controller.notification.updateNotification
);
router.delete(
  "/",
  verifyToken,
  checkRole("user"),
  validate(schema.notification),
  controller.notification.deleteNotification
);

module.exports = router;
