const express = require("express");
const schema = require("../../validation/auth.schema");
const validate = require("../../middlewares/validation");
const { verifyToken } = require("../../middlewares/verify.token");
const controller = require("../../controllers/order");
const checkRole = require("../../middlewares/check.role");
const router = express.Router();

router.get("/", verifyToken, checkRole("user"), controller.order.getOrderHistoryById);
router.get("/all", verifyToken, checkRole("admin"), controller.order.getOrders);
router.post(
  "/:courseId/free",
  verifyToken,
  checkRole("user"),
  controller.order.enrollFree
);
router.post(
  "/:courseId/premium",
  verifyToken,
  checkRole("user"),
  controller.order.orderPremium
);
router.put(
  "/confirm/:id",
  verifyToken,
  checkRole("admin"),
  controller.order.confirmOrderPremium
);

module.exports = router;
