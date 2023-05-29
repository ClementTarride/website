const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = mongoose.Schema({
  title: {
    type: String,
  },
  username : {
    type: String,
    required : true
  },
  commentaire : String,
  urlimage : String
});

module.exports = mongoose.model('Message',MessageSchema);
