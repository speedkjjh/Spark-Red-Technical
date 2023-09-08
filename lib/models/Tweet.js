const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Tweet', tweetSchema);
