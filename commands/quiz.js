const sendMessage = require('../handles/sendMessage');

const quiz = (api, message) => {
    sendMessage(api, "Question : Quelle est la capitale de la France ?", message.threadID);
};

// Exécuter la commande
module.exports = quiz;
