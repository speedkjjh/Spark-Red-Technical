const asyncHandler = require("express-async-handler");
const Tweet = require("../models/Tweet");

const createTweet = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { user, content, createdDate } = req.body;
  if (!user || !content) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const tweet = await Tweet.create({
    user: req.user.id,
    content,
    createdDate,
    username: req.user.username,
  });

  res.status(201).json(tweet);
});

//@desc Get tweet
//@route GET /api/tweets/:id
//@access private
const getTweet = asyncHandler(async (req, res) => {
  const tweet = await Tweet.findById(req.params.id);
  if (!tweet) {
    res.status(404);
    throw new Error("Tweet not found");
  }
  res.status(200).json(tweet);
});

const getTweets = asyncHandler(async (req, res) => {
    const { username } = req.query;
    let query = {};

    if (username) {
      query.username = { $regex: username, $options: 'i' }; // case insensitive search
    }

    const tweets = await Tweet.find(query).sort({ createdDate: -1 });
    res.status(200).json(tweets);
});

//@desc Update tweet
//@route PUT /api/tweets/:id
//@access private
const updateTweet = asyncHandler(async (req, res) => {
  let tweet = await Tweet.findById(req.params.id);
  if (!tweet) {
    res.status(404);
    throw new Error("Tweet not found");
  }

  if (tweet.user.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User doesn't have permission to update other user's tweets");
  }

  tweet = await Tweet.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(tweet);
});

//@desc Delete tweet
//@route DELETE /api/tweets/:id
//@access private
const deleteTweet = asyncHandler(async (req, res) => {
  const tweet = await Tweet.findById(req.params.id);
  if (!tweet) {
    res.status(404);
    throw new Error("Tweet not found");
  }
  if (tweet.user.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User doesn't have permission to delete other user's tweets");
  }
  await Tweet.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: 'Tweet deleted' });
});

module.exports = {
  getTweets,
  createTweet,
  getTweet,
  updateTweet,
  deleteTweet,
};