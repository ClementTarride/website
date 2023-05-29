const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contenuSchema = mongoose.Schema({
  title: {
    type: String,
    unique : true
  },
  commentaire : String,
});

module.exports = mongoose.model('Contenu',contenuSchema);
