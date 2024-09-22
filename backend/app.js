const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const errorHandler = require("./handler/error-handler");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Connexion à la base de données
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connecté à MongoDB");
})
.catch((err) => {
  console.error("Erreur de connexion à la base de données", err);
});

// Définir les routes
app.use("/api/utilisateur", require("./Routes/user-route")); // Chemin vers les utilisateurs
app.use("/api/entreprises", require("./Routes/Entreprise-route")); // Chemin vers les entreprises
app.use("/api/travaux", require("./Routes/travail-route")); // Chemin vers les travaux

// Gestion des routes non trouvées
app.use((req, res, next) => {
  const error = new Error("Route non trouvée");
  error.status = 404;
  next(error);
});

// Middleware pour gérer les erreurs
app.use(errorHandler);

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
