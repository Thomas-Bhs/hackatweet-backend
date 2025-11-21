var express = require('express');
var router = express.Router();

const Tweet = require('../models/tweets'); 


router.post('/', (req, res) => {
  const { content } = req.body;  


  if (!content || !content.trim()) {
    return res.json({ result: false, message: 'Pas de texte !' });
  }

  const newTweet = new Tweet({
    content,            
    createdAt: new Date()
  });

  newTweet.save().then(savedTweet => {

    res.json({ result: true, tweet: savedTweet });
  });
});


router.get('/', (req, res) => {
  Tweet.find()
    .sort({ createdAt: -1 })
    .then(tweets => {
      res.json({ result: true, tweets });
    });
});

module.exports = router;
