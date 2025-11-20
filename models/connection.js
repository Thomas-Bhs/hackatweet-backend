const mongoose = require('mongoose');

CONNECTION_STRING="mongodb+srv://enzouterhidalgo30_db_user:hlMDmueofc1djMsz@cluster0.shl4fgz.mongodb.net/hackatweet"

mongoose.connect(CONNECTION_STRING, {
  connectTimeoutMS: 2000})
  .then(() => console.log('✅ Connecté à MongoDB'))
  .catch(error => console.error('❌ Erreur MongoDB:', error));
  