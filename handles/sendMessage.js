const sendMessage = (api, message, threadID) => {
    api.sendMessage(message, threadID, (err) => {
        if (err) {
            console.error("Erreur lors de l'envoi du message :", err);
        } else {
            console.log("Message envoyé avec succès.");
        }
    });
};

module.exports = sendMessage;
