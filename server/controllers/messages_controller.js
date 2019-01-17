let messages= [];
let id = 0;

module.exports = {
    create: (req, res) => {
    const {text, time} = req.body;
    messages.push({id, text, time});
    id++;
    res.status(200).send(messages);
    },

    read: (req, res) => {
    
    res.status(200).send(messages);

    },

    update: (req, res) => {
    // update the text property of a message using the text value from the request body.
    const {text} = req.body;
    
    //determine which message to update based on the value of id from the request url parameters
    const updateID = req.params.id;
    
    //use .findIndex to get the index where the ids match.
    const messageIndex = messages.findIndex(message => message.id == updateID);
    let message = messages[messageIndex];

    messages [messageIndex] = {
        id: message.id,
        text: text || message.text,
        time: message.time
    };
    //return the updated messages array.
    res.status(200).send (messages);
    },

    delete: (req, res) => {
    //delete a message using the value of id from the request url parameters.
    const deleteID = req.params.id;

    //.findIndex again with the id to get the index of the message object
    messageIndex = messages.findIndex(message => message.id == deleteID);

    //use .splice to remove it from the messages array. 
    messages.splice(messageIndex, 1);

    //send the updated messages array.
    res.status(200).send(messages);
    }
    

}