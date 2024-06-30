const express = require("express");
const controller = require("../../controllers/course");
const { verifyToken } = require("../../middlewares/verify.token");
const checkRole = require("../../middlewares/check.role");
const router = express.Router();

router.get("/", controller.courseType.getAll);
router.get("/:id", controller.courseType.getById);

router.post("/", verifyToken, checkRole("admin"), controller.courseType.create);
router.put("/:id", verifyToken, checkRole("admin"), controller.courseType.update);
router.delete("/:id", verifyToken, checkRole("admin"), controller.courseType.delete);

module.exports = router;
