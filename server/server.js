const http = require('http');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const User = require('./api/models/userListModel.js');
const Message = require("./api/models/messageListMode.js")
const message_support = require('./api/models/messagesupport.js');
const jwt = require('jsonwebtoken');
const app = express();
const Boss = require('./api/models/modeListModel.js')
const Contenu = require('./api/models/contenuMode.js')

mongoose.connect('mongodb+srv://DumUser:"Vinment66@cluster0.1xzemyp.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(cors());
app.use(bodyParser.json());

app.get('/user', (req, res) => {
  let token = req.headers.token;
  new Promise((resolve, reject) => {
    jwt.verify(token, 'secretkey', (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  })
    .then(decoded => {
      return User.findOne({ _id: decoded.userId }).exec();
    })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          title: 'unauthorized',
        });
      }
      console.log(user);
      return res.status(200).json({user : { email : user.email, username : user.username}});
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({
        title: 'server error',
        error: err,
      });
    });
});
app.get('/modetry', (req, res) => {
  let token = req.headers.token;
  
  jwt.verify(token, 'secretkey', (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).json({
        title: 'Unauthorized',
        error: err
      });
    }

    Boss.findOne({ _id: decoded.BossId })
      .exec()
      .then(boss => {
        if (!boss) {
          console.log('error');
          return res.status(401).json({
            title: 'Unauthorized',
          });
        }

        console.log(boss);
        return res.status(200).json({
          boss: { email: boss.email }
        });
      })
      .catch(err => {
        console.log(err);
        return res.status(500).json({
          title: 'Server error',
          error: err
        });
      });
  });
});

app.post('/contenupublishmode', (req, res) => {
  const contenu = new Contenu({
    title: req.body.title,
    commentaire: req.body.commentaire
  });
  console.log(contenu);
  contenu.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
    .catch(error => res.status(400).json({ error: error }));
});

app.get('/contenupublishmodeget', async (req, res) => {
  try {
    const result = await Contenu.find({}).sort({ createdAt: -1 });
    if (result.length === 0) {
      return res.status(404).json({
        message: 'Aucun contenu trouvé'
      });
    }
    res.status(200).json(result);
  } catch (err) {
    console.error('Erreur lors de la récupération du contenu :', err);
    res.status(500).json({
      error: 'Erreur du serveur'
    });
  }
});



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

app.post ('/publish',(req,res)=>{
  const message = new Message({
    username : req.body.username,
    commentaire : req.body.commentaire
  });
  console.log(message)
  message.save()
  .then(() => res.status(200).json({message : 'commentaire posté'}))
  .catch(error => res.status(400).json({error : error}))
});

app.post ('/publishsupport',(req,res)=>{
  const message = new message_support({
    title : req.body.title,
    username : req.body.username,
    commentaire : req.body.commentaire,
    urlimage : req.body.urlimg
  });
  console.log(message)
  message.save()
  .then(() => res.status(200).json({message : 'commentaire posté'}))
  .catch(error => res.status(400).json({error : error}))
})

app.get('/mypublish_support',(req,res)=>{
  const username = req.query.username;
  console.log(username);
  message_support.find({ username : username})
  .sort({ _id : -1})
  .then(messages => {
    console.log(messages);
    res.status(200).json(messages);
  })
  .catch(err => {
    console.error('Error retrieving messages:', err);
    res.status(500).json({ error: 'Error retrieving messages' });
  });
})

app.get('/mypublish', (req, res) => {
  console.log("is here")
  const username = req.query.username; // Utilisez req.query.username pour récupérer le nom d'utilisateur
  console.log(username);

  Message.find({ username: username }, 'commentaire')
    .sort({ _id: -1 }) // Trie les commentaires par ordre décroissant (inverse)
    .then(messages => {
      console.log(messages);
      res.status(200).json(messages);
    })
    .catch(err => {
      console.error('Error retrieving messages:', err);
      res.status(500).json({ error: 'Error retrieving messages' });
    });
});



app.get('/messages', async (req, res) => {
  try {
    const messageCount = await Message.countDocuments();
    let messages = [];
    
    if (messageCount > 0) {
      messages = await Message.find().sort({ _id: -1 }); // Trie les commentaires par ordre décroissant (inverse)
    }
    
    console.log(messages);
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



app.post('/mode', (req, res) => {
  console.log("entré");
  const { email, password } = req.body;

  Boss.findOne({ email: email })
    .exec()
    .then(boss => {
      if (!boss) {
        console.log("pas trouvé user");
        return res.status(401).json({
          title: 'User not found',
          error: 'Invalid credentials'
        });
      }

      bcrypt.compare(password, boss.password, (err, result) => {
        if (err) {
          console.log("Erreur de comparaison de mot de passe :", err);
          return res.status(500).json({
            title: 'Server error',
            error: err
          });
        }

        if (!result) {
          console.log("Mot de passe invalide");
          return res.status(401).json({
            title: 'Login failed',
            error: 'Invalid password'
          });
        }

        let token = jwt.sign({ BossId: boss._id }, 'secretkey');
        console.log("Succès envoyé");
        return res.status(200).json({
          title: 'Login',
          token: token
        });
      });
    })
    .catch(err => {
      console.log("Erreur 500 :", err);
      return res.status(500).json({
        title: 'Server error',
        error: err
      });
    });
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


const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

app.get('/user',(req,res) =>{
  let token =req.headers.token;
  jwt.verify(token, 'secretkey', (err,decoded) =>{
    if (err) return res.status(401).json({
      title : 'unauthorized',
    })
    User.findOne({ _id: decoded.userId}, (err, user) =>{
      if (err) return console.log(err)
      console.log(user);
    })
  })
})

app.get('/allpublisheduser', (req, res) => {
  message_support.find({})
    .exec()
    .then((messages) => {
      res.status(200).json(messages);
    })
    .catch((err) => {
      console.error('Erreur lors de la récupération des messages :', err);
      res.status(500).json({
        error: 'Erreur du serveur'
      });
    });
});


app.delete('/publishsupportdelete', (req, res) => {
  const title = req.query.title;
  console.log(title);
  message_support.findOneAndDelete({title: title})
    .then(() => {
      console.log("fait");
      res.sendStatus(200);
    })
    .catch(err => {
      console.error('Error deleting message:', err);
      res.status(500).json({ error: 'Error deleting message' });
    });
});

const moderateur = [{
  password : "sdferty",
  email : "admin1@gmail.com"
},{
  password : "overtry",
  email: "admin2@gmail.com"
}];
Boss.create(moderateur)
  .then(() => {
    console.log('Données des modérateurs enregistrées avec succès');
    // Faites ici d'autres opérations ou affichez un message de succès
  })
  .catch((error) => {
    console.error('Erreur lors de l\'enregistrement des données des modérateurs :', error);
    // Gérez ici les erreurs lors de l'enregistrement des données
  });




const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);
