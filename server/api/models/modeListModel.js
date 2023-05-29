const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const BossSchema = mongoose.Schema({
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique : true
  },
});

BossSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      next();
    } catch (error) {
      return next(error);
    }
  } else {
    return next();
  }
});

module.exports = mongoose.model('Boss',BossSchema);
