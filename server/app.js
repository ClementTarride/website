const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const User = require('./api/models/userListModel.js');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const message_support = require('./api/models/messagesupport.js');

mongoose.connect('mongodb+srv://DumUser:"Vinment66@cluster0.1xzemyp.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
app.use(cors);
app.use(bodyParser.json());

// routes 

app.post ('/registerUser',(req,res)=>{
    const user = new User({
        username : req.body.Username,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password, 10)
    });
    console.log(user)
    user.save()
    .then(()=> res.status(201).json({message: 'Object enregistré!'}))
    .catch(error => res.status(400).json({error : error}));
});


app.post('/login', (req, res) => {
  console.log("entré")
  User.findOne({ email: req.body.email })
    .exec()
    .then(user => {
      console.log(user);
      if (!user) {
        console.log("pas trouvé user")
        return res.status(401).json({
          title: 'user not found',
          error: 'invalid credentials'
        });
      }
      if (!bcrypt.compareSync(req.body.password, user.password)) {
        console.log("400 bycript")
        return res.status(401).json({
          title: 'login failed',
          error: 'invalid password'
        });
      }
      let token = jwt.sign({ userId: user._id }, 'secretkey');
      console.log("succés envoyé")
      return res.status(200).json({
        title: 'login',
        token: token
      });
    })
    .catch(err => {
      console.log("erreur 500")
      return res.status(500).json({
        title: 'server error',
        error: err
      });
    });
  console.log(req.body);
});



app.get('/user',(req,res) =>{
  let token =req.headers.token;
  jwt.verify(token, 'secretkey', (err,decoded) =>{
    if (err) return res.status(401).json({
      title : 'unauthorized',
    })
    console.log(decoded);
  })
})



module.exports = app;