require('dotenv').config(); // Charge les variables d'environnement depuis .env
const express = require('express');
const connectDB = require('./config/db');
const newsRoutes = require('./routes/newsRoutes');

const app = express();

// Test des variables d'environnement
console.log("MONGO_URI :", process.env.MONGO_URI); // Vérifie l'URL MongoDB
console.log("PORT :", process.env.PORT);           // Vérifie le PORT configuré
// Connexion à MongoDB
connectDB();

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Routes
app.use('/api/news', newsRoutes); // Montez les routes ici

// Serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
