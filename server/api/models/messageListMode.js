const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  username : {
    type: String,
    required : true
  },
  commentaire : String
});

module.exports = mongoose.model('Message',MessageSchema);
