const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TravailSchema = new Schema({
  nom: { type: String, required: true },
  numero: { type: String, required: true },
  des: { type: String, required: true },
  genre: { type: String, required: true },
});

module.exports = mongoose.model("Travail", TravailSchema);
