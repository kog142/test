const mongoose = require('mongoose');

const inscriptionSchema = mongoose.Schema({
    nom: {type: string, require: true},
    prenom: {type: string, require: true},
    email: {type: string, require: true},
    pseudo: {type: string, require: true},
    password: {type: string, require: true}
});

module.exports = mongoose.model('inscription', inscriptionSchema);