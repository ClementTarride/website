const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSupportSchema = mongoose.Schema({
  title: {
    type: String,
    require : true,
    unique : true
  },
  username : {
    type: String,
    required : true
  },
  commentaire : String,
  urlimage : String,
  
});

module.exports = mongoose.model('MessageSupport',MessageSupportSchema);
