const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')

const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

app.use(express.json()); 
app.use(cors())

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

  const userSchema = new mongoose.Schema({
    adresse_email: String,
    mot_de_passe: String,
  });

const UserModel = mongoose.model("users", userSchema)
  
app.get('/get_user', async (req, res)=> {
  const userData = await UserModel.find();
  console.log(userData)
  res.json(userData)
});

app.get('/get_user/:id', async (req, res)=> {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json("Utilisateur non trouvé");
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/add_user', async (req, res) => {
  try {
      const user = new UserModel({
          adresse_email: req.body.adresse_email,
          mot_de_passe: req.body.mot_de_passe
      });
      
      await user.save();
      res.status(201).json("User créé avec succès");
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
});

app.put('/update_user/:id', async (req, res) => {
  try {
      const updateuser = await UserModel.findByIdAndUpdate (req.params.id,{
          adresse_email: req.body.adresse_email,
          mot_de_passe: req.body.mot_de_passe
      });
      
      if(!updateuser)
      res.status(201).json("User non trouvée ");
    
      res.status(203).json("User mise a jour avec succès")
    
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
});

app.delete('/delete_user/:id', async (req, res) => {
  try {
        const delete_user = await UserModel.findByIdAndDelete (req.params.id,)
          if (!delete_user) {
            return res.status(404).json("User non trouvé");
        }
        
        res.status(200).json("User supprimé avec succès");
      
    } catch (error) {
        res.status(400).json({ error: error.message });
        }
      })

/*mongoose.connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB bien connectée");
        app.listen(PORT, () => {
            console.log(`On est sur le port ${PORT}`);
        });
    })
    .catch((error) => console.log(error));
*/

/*const express = require('express'); 
const app = express(); 
const port = 3000; 


app.use(express.json()); 


app.get('/', (req, res) => {
    res.send('Hello, World!'); 
    console.log('Test')
});

// Lancement du serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`); 
});
*/