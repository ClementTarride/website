const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique : true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique : true
  },
  Mode : {
    type: Boolean
  },
  Message : Array,
  image : String
});

module.exports = mongoose.model('User',UserSchema);
