
const { response } = require('express');

const Persona = require('../models/persona')

const personaPost = async (req, res = response) => {

    const { nombre, apellido, email, alias} = req.body;
    const persona = new Persona({nombre, apellido, email, alias});

    // Verificar si el correo existe
    
    // Guardar en la DB
    await persona.save();
    
    res.json({
        persona
    });
}

const personaGet = (req, res = response) => {


    res.json({
        id: "numerico",
        nombre:"string",
        apellido: "string",
        alias: "string",
        email: "string"
    });
}

const personaGetUno = (req, res = response) => {

    res.json({
        id: "numerico",
        nombre:"string",
        apellido: "string",
        alias: "string",
        email: "string"
    });
}

const personaPut = (req, res = response) => {

    res.json({
        id: "numerico",
        nombre:"string",
        apellido: "string",
        alias: "string",
        email: "string"
    });
}

const personaDelete = (req, res = response) => {

    res.json({
        id: "numerico",
        nombre:"string",
        apellido: "string",
        alias: "string",
        email: "string"
    });
}


module.exports = {
    personaPost,
    personaGet,
    personaGetUno,
    personaPut,
    personaDelete
}


