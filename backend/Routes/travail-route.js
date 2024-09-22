const express = require("express");
const router = express.Router();
const travailController = require("../controllers/travail-controller");



// Route pour obtenir tous les travaux
router.get("/", travailController.getTravaux);

// Route pour créer un nouveau travail
router.post("/",  travailController.createTravail);

// Route pour supprimer un travail
router.delete("/:id", travailController.deleteTravail);

module.exports = router;
