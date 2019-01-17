const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
const mc = require('./controllers/messages_controller');
 
app.use(bodyParser.json() );
app.use(express.static(__dirname + '/../public/build'));
const port = 3001;
app.listen(port, () => {console.log(`SERVER is running..on ${port}`); } );

//make a messagesBaseUrl variable so that if the URL ever changes we won't have to update in four different places.
//The messagesBaseUrl should equal /api/messages.
const messageBaseUrl = "/api/messages";

//create endpoints

//use the built-in methods express gives us to create endpoints. We'll use post for create
app.post(messageBaseUrl, mc.create);

// use get for read
app.get(messageBaseUrl, mc.read);

// use put for update and add on a url parameter of id
app.put(`${messageBaseUrl}:id`, mc.update);

// use delete for delete and add on a url parameter of id
app.delete(`${messageBaseUrl}:id`, mc.delete);