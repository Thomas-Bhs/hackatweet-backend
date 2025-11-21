const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
    inconLogo: String,
    userName: String,
    userTag: String,
    content: String,
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('tweets', tweetSchema);
