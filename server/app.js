require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connecté à MongoDB Atlas"))
  .catch((err) => console.error("Erreur de connexion:", err));

// Routes
app.use("/api/contact", require("./routes/contact"));
app.use("/api/projects", require("./routes/projects"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
