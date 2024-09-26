const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offreSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  contactEmail: {
    type: String,
    required: true,
  },
  contactPhone: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('Offre', offreSchema);
