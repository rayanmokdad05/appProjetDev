const express = require("express");
const router = express.Router();
const control = require("../controllers/Entreprise-controller");

// Connexion et inscription
router.post("/Login", control.ConnexionUti);
router.post("/SignUp", control.InscrireUti);

/* Page profil
router.get("/EntrepriseInfo/:uid", control.UserInfo);
router.patch("/Update/:uid", control.UpdateUser);
router.delete("/Delete/:uid", control.DeleteUser);
*/

module.exports = router;
