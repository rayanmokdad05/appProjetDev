const express = require('express');
const router = express.Router();
const {
  ConnexionUti,
  InscrireUti,

} = require('../controllers/user-controller'); // Vérifie que le chemin est correct

// Routes
router.post('/inscription', InscrireUti); // Pour l'inscription
router.post('/connexion', ConnexionUti); // Pour la connexion


module.exports = router;
