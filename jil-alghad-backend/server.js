require('dotenv').config(); // Charge les variables d'environnement depuis .env
const express = require('express');
const connectDB = require('./config/db');
const newsRoutes = require('./routes/newsRoutes');
const cors = require("cors");

const app = express();

// Test des variables d'environnement
console.log("MONGO_URI :", process.env.MONGO_URI); // Vérifie l'URL MongoDB
console.log("PORT :", process.env.PORT);           // Vérifie le PORT configuré
// Connexion à MongoDB
connectDB();

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Configuration de CORS
app.use(cors({
    origin: ["https://jil-alghad-admin-3r38aqyu1-noussaiba-mdaghris-projects.vercel.app", "https://noussaibamdaghri.github.io/association-jil-alghad"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// Routes
app.use('/api/news', newsRoutes); // Montez les routes ici

// Serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));

