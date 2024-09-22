const Utilisateur = require("../models/user-model");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

// Fonction pour créer un token JWT
const createToken = (_id) => {
  return jwt.sign({ _id }, "asdasdasd", { expiresIn: "3d" });
};

// Connexion utilisateur
const ConnexionUti = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Utilisateur.Connexion(email, password);
    const token = createToken(user._id);

    res.status(200).json({ email, token, userId: user._id, type: user.type });
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    res.status(400).json({ error: error.message });
  }
};

// Inscription utilisateur
const InscrireUti = async (req, res) => {
  const { nom, email, password, type } = req.body;

  try {
    const utilisateur = await Utilisateur.inscrire(nom, email, password, type);
    res.status(200).json({ nom, email, utilisateur });
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    res.status(400).json({ error: error.message });
  }
};

// Autres fonctions (UserInfo, UpdateUser, DeleteUser) à ajouter ici

module.exports = {
  ConnexionUti,
  InscrireUti,
  // UserInfo,
  // UpdateUser,
  // DeleteUser,
};
