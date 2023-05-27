const mongoose = require('mongoose');
const routes = require('./api/routes/userListRoutes.js');

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var User = require('./api/models/userListModel');
var bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://DumUser:"Vinment66"@cluster0.1xzemyp.mongodb.net/ma_base_de_donnees', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connecté à la base de données MongoDB');
})
.catch((err) => {
    console.error('Erreur de connexion à la base de données', err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
    console.log(`Le serveur est en écoute sur le port ${port}`);
});

console.log('user List started on:' + port);
