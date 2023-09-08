const express = require("express");
const router = express.Router();
const {
    getTweets,
    createTweet,
    getTweet,
    updateTweet,
    deleteTweet,
} = require("../controllers/TweetController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/")
    .get(getTweets)
    .post(createTweet);

router.route("/:id")
    .get(getTweet)
    .put(updateTweet)
    .delete(deleteTweet);

module.exports = router;