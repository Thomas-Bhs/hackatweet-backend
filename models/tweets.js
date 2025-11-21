const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
    inconLogo: String,
    userName: String,
    userTag: String,
    content: String,
})

module.exports = mongoose.model('tweets', tweetSchema);