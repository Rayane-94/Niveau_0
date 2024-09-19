const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

app.use(express.json()); 
app.use(cors());

//Connection BDD
mongoose.connect(MONGOURL)
  .then(() => {
    console.log('Connexion MongoDB réussie');
    app.listen(PORT, () => {
      console.log(`On est sur le port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erreur de connexion MongoDB:', err);
  });

  
//ENDPOINT

  app.get('/', (req, res) => {
      res.send('Hello, World!'); 
      console.log('Test')
  });

  app.get('/tasks', (req, res)=> {
    res.json([{"name": "backend ici"}])
  });
