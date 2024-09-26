const Utilisateur = require("../models/user-model");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// Générer un token JWT
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET || "asdasdasd", {
    expiresIn: "3d",
  });
};

// Connexion
const ConnexionUti = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Effectue l'authentification
    const user = await Utilisateur.Connexion(email, password);

    // Génère un jeton JWT
    const token = createToken(user._id);

    res.status(200).json({ email, token, userId: user._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Inscription
const InscrireUti = async (req, res) => {
  const { nom, email, password } = req.body;

  try {
    const utilisateur = await Utilisateur.inscrire(nom, email, password);

    // Générer un token après l'inscription
    const token = createToken(utilisateur._id);

    res.status(200).json({ nom, email, token, userId: utilisateur._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};





module.exports = {
  ConnexionUti,
  InscrireUti,
  //UserInfo,
  //UpdateUser,
  //DeleteUser,
};
