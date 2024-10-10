const sendMessage = require('../handles/sendMessage');

const salut = (api, message) => {
    sendMessage(api, "Salut ! Comment ça va ?", message.threadID);
};

// Exécuter la commande
module.exports = salut;
