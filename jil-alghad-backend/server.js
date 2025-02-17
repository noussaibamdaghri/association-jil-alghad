require('dotenv').config(); // Charge les variables d'environnement depuis .env
const express = require('express');
const connectDB = require('./config/db');
const newsRoutes = require('./routes/newsRoutes');
const cors = require("cors");
const nodemailer = require("nodemailer");

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
    origin: [
        "https://jil-alghad-admin-3r38aqyu1-noussaiba-mdaghris-projects.vercel.app",
        "https://noussaibamdaghri.github.io/association-jil-alghad"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// Routes API existantes
app.use('/api/news', newsRoutes); 

// Route test pour vérifier si l’API fonctionne
app.get("/", (req, res) => {
  res.send("API en cours d'exécution...");
});

// ==================
// Route pour gérer le formulaire de contact
// ==================
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Vérification des champs
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'Tous les champs sont requis.' });
    }

    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,  // Adresse email d’envoi
            pass: process.env.EMAIL_PASS   // Mot de passe ou App Password
        }
    });

    // Email à envoyer
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "ton-email@gmail.com", // Remplace par ton adresse email
        subject: `Nouveau message de ${name} - ${subject}`,
        text: `Nom: ${name}\nEmail: ${email}\nObjet: ${subject}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Message envoyé avec succès !" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de l'envoi du message." });
    }
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));


