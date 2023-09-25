const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

// Middleware pour activer CORS et la gestion des cookies.
app.use(cors({ origin: 'https://sitea.pro', credentials: true }));
app.use(cookieParser());

// Route pour servir votre page HTML supplémentaire
app.get('/', (req, res) => {
    res.setHeader('Content-Security-Policy', "default-src * 'unsafe-inline' 'unsafe-eval'");

    res.sendFile(__dirname + '/public/index.html');
  });

// Endpoint pour l'exemple.
app.get('/exemple-api', (req, res) => {
    // Définissez un cookie sur le site cible.
    res.setHeader('Content-Security-Policy', "default-src * 'unsafe-inline' 'unsafe-eval'");
    res.cookie('monCookiehttponlysecure', 'valeurhttponlysecure', { maxAge: 3600000, httpOnly: true, secure: true});
    res.cookie('monCookiesecure', 'valeursecure', { maxAge: 3600000, httpOnly: false, secure: true});
    res.cookie('monCookiehttponly', 'valeurhttponly', { maxAge: 3600000, httpOnly: true, secure: false});
    res.cookie('monCookie', 'valeur', { maxAge: 3600000, httpOnly: false, secure: false});

    // Répondez avec un message.
    res.send('Réponse du site cible : La requête a été traitée avec succès.');
});

// Démarrer le serveur.
app.listen(port, () => {
    console.log(`Serveur du site cible écoutant sur le port ${port}`);
});
