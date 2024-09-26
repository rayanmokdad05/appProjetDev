const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const errorHandler = require("./handler/error-handler");
require('dotenv').config(); // Load environment variables from .env file


const app = express();

const offerRoutes = require("./Routes/offresRoute");

app.use(express.json());
app.use(cors());


// Middleware pour gérer les erreurs
app.use(errorHandler);


app.use('/api/offers', offerRoutes);



// Connexion à la base de données
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
  // Démarrer le serveur
    app.listen(process.env.PORT, () => {
     console.log(` DB connecte & Serveur démarré sur le port `, process.env.PORT)
  })
})
.catch((error) => {
  console.log(error)
})



// Gestion des routes non trouvées
app.use((req, res, next) => {
  const error = new Error("Route non trouvée");
  error.status = 404;
  next(error);
});






