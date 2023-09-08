const mongoose = require('mongoose');

const ReplySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    tweet: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet'
    }]
});

module.exports = mongoose.model('Reply', ReplySchema);