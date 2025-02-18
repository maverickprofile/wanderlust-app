const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

// 🌟 ✅ POST Route to Add a Review
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// ❌ 🛠️ Fixed DELETE Route for Review
router.delete("/:reviewId",isLoggedIn ,isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;