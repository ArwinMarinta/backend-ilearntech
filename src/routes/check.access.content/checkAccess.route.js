const express = require("express");
const { verifyToken } = require("../../middlewares/verify.token");
const controller = require("../../controllers/check.access.content/check.controller");
const checkRole = require("../../middlewares/check.role");
const router = express.Router();

router.get(
  "/courses/:courseId/modules/:moduleId/contents/:contentId",
  verifyToken,
  controller.checkAccess
);

module.exports = router;
