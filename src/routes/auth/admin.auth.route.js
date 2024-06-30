const express = require("express");
const schema = require("../../validation/auth.schema");
const validate = require("../../middlewares/validation");
const { verifyToken } = require("../../middlewares/verify.token");
const checkRole = require("../../middlewares/check.role");
const controller = require("../../controllers/auth");
const router = express.Router();

router.post("/admin/register", controller.authAdmin.register);
router.post("/admin/login", controller.authAdmin.login);

module.exports = router;
