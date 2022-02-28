const router = require('express').Router();
const {Contact,contact_validation} = require('../models/contact');

function validation(validator,res) {
    let results = validator.validate(req.body);
    if(results.error)
        return res.status(400).send(results.error.details[0].message);
}

router.get('',async (req,res)=>{
    res.send(await Contact.find());
});

router.get('/:id',async (req,res)=>{
    res.send(await Contact.findById(req.params.id));
});

router.post('',async (req,res)=>{
    validation(contact_validation,res);
    let contact = new Contact(req.body);   
    try {
        res.send(await contact.save());
    } catch (error) {
        res.status(400).send(error.message);
    }
    
});

//add phone number
router.put('/add/phone/:id/:numero',async (req,res)=>{
    if(req.params.numero.length==8)
        return res.status(400).send('Error in phone');
    let contact = await Contact.findById(req.params.id);   
    if(!contact)
        return res.status(404).send('Id not found');
    try {
        contact.numeros.push(req.params.numero);
        res.send(await contact.save());
    } catch (error) {
        res.status(400).send(error.message);
    }
    
});

//delete phone number
router.delete('/delete/phone/:id/:numero',async (req,res)=>{
    if(req.params.numero.length==8)
        return res.status(400).send('Error in phone');
    let contact = await Contact.findById(req.params.id);   
    if(!contact)
        return res.status(404).send('Id not found');
    try {
        contact.numeros = contact.numeros.filter(num => num != req.params.numero);
        res.send(await contact.save());
    } catch (error) {
        res.status(400).send(error.message);
    }
    
});
module.exports=router;