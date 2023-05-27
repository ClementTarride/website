const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BossSchema = mongoose.Schema({
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
  Boss : {
    type : Boolean
  }
});

module.exports = mongoose.model('Boss',BossSchema);
