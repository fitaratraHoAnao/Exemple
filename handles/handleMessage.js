const handleMessage = (api, message) => {
    console.log("Message reçu :", message.body);

    const body = message.body.toLowerCase();

    // Logique de réponse aux messages en fonction du contenu
    if (body === 'salut' || body === 'bonjour') {
        api.sendMessage('Salut ! Comment ça va ?', message.threadID);
    } 
    else if (body === 'quiz') {
        api.sendMessage('Question : Quelle est la capitale de la France ?', message.threadID);
    } 
    else if (body === 'paris') {
        api.sendMessage('Correct! Bravo!', message.threadID);
    } 
    else {
        api.sendMessage("Je ne comprends pas ce que tu veux dire. Essaie de dire 'salut' ou 'quiz'.", message.threadID);
    }
};

module.exports = handleMessage;
