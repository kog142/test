const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Inscription = require('./model/inscription');
app.use(express.json());


mongoose.connect('mongodb+srv://ebanethp:uDIBjQkDhP7P4gn3@cluster0.rvp8qq0.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


  app.post('/api/g-space-data',(req, res, next) => {
    delete req.body._id;
    const inscription = new Inscription({
     /* title: req.body.title,*/
        ...req.body
    });
    inscription.save().then(()=> res.status(201).json({message:'Objet enregistré'}))
    .catch(error => res.status(400).json({ error }));
  })

  app.use('/api/g-space-data',(req, res, next) => {
    Inscription.find().then(inscriptions => res.status(200).json(inscriptions)).catnodemch(error => res.status(400).json({error}));
 })
 module.exports = app;