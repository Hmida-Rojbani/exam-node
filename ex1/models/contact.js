
const mongoose = require('mongoose');
const Joi = require('joi');
const contact_schema = new mongoose.Schema({
    nom : String,
    prenom : String,
    travail: String,
    adress : String,
    numeros : [String]
});

let contact_validation = Joi.object({
    nom: Joi.string().min(3).required(),
    prenom: Joi.string().min(3).required(),
    travail: Joi.string(),
    adress: Joi.string(),
    numeros : Joi.array().items(Joi.string().length(8))
});

const Contact = mongoose.model('Contact',contact_schema);

module.exports.Contact=Contact;
module.exports.contact_validation=contact_validation;