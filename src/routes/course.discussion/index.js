const express = require("express");
const courseDiscussionROute = require("./course.discussion.route");
const router = express.Router();

router.use(courseDiscussionROute);

module.exports = router;
