const login = require('facebook-chat-api');
const fs = require('fs');
const path = require('path');
const handleMessage = require('./handles/handleMessage');

// Charger appstate.json pour éviter de se reconnecter manuellement
let appState;
try {
    appState = JSON.parse(fs.readFileSync('appstate.json', 'utf8'));
} catch (error) {
    console.error('Erreur lors du chargement de appstate.json:', error);
    process.exit(1);
}

// Connexion avec facebook-chat-api
login({ appState }, (err, api) => {
    if (err) {
        console.error("Erreur lors de la connexion :", err);
        return;
    }

    console.log("Bot connecté avec succès!");

    // Écouter les messages entrants et les postbacks
    api.listenMqtt((err, message) => {
        if (err) return console.error(err);

        if (message.body) {
            // Gestion des messages
            handleMessage(api, message);
        } else if (message.postback) {
            // Gestion des postbacks
            // Vous pouvez gérer les postbacks ici si nécessaire
            console.log("Postback reçu :", message.postback);
        }
    });
});
