const handlePostback = (api, postback) => {
    console.log("Postback reçu :", postback.payload);
    
    // Exemple de réponse à un postback
    api.sendMessage(`Postback avec payload ${postback.payload} reçu.`, postback.threadID);
};

module.exports = handlePostback;
