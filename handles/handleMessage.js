const fs = require('fs');
const path = require('path');
const sendMessage = require('./sendMessage');

// Importer toutes les commandes dynamiquement
const commands = {};
const commandsDir = path.join(__dirname, '../commands');

fs.readdirSync(commandsDir).forEach(file => {
    if (file.endsWith('.js')) {
        const commandName = file.replace('.js', '');
        commands[commandName] = require(path.join(commandsDir, file));
    }
});

// Gérer les messages
const handleMessage = (api, message) => {
    console.log("Message reçu :", message.body);

    const body = message.body.toLowerCase();

    // Vérifier si une commande existe
    if (commands[body]) {
        commands[body](api, message);
    } else {
        sendMessage(api, "Je ne comprends pas ce que tu veux dire. Essaie de dire 'salut' ou 'quiz'.", message.threadID);
    }
};

module.exports = handleMessage;
