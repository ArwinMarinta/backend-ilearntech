const express = require("express");
const userLearningProgress = require("./user.learning.progress.route");
const router = express.Router();

router.use(userLearningProgress);

module.exports = router;
