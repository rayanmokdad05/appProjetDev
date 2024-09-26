const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");

// Routes
router.post("/inscription", userController.InscrireUti); // Pour l'inscription
router.post("/login", userController.ConnexionUti); // Pour la connexion

module.exports = router;
