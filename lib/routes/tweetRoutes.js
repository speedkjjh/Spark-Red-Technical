const express = require('express');
const Tweet = require('../models/Tweet');
const router = express.Router();

router.get('/tweets', async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const tweets = await Tweet.find().sort({ createdDate: -1 }).limit(limit);
        res.json(tweets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
