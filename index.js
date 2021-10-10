const express = require('express');
const app = express();
const routes = require('./routes');;

// Middleware
app.use(express.json(),routes);

// Lancement serveur Nodejs
app.listen(8000, () => {

    console.log('serveur à l\'écoute');

});