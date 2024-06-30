const express = require("express");
const userCourseRoutes = require("./user.course.route");
const userWishlistRoutes = require("./user.wishlist.route");
const checkRoutes = require("./check.route");
const router = express.Router();

router.use("/user-courses", userCourseRoutes);
router.use("/wishlists", userWishlistRoutes);
router.use(checkRoutes);

module.exports = router;
