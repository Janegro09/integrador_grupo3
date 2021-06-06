
const { response } = require('express');
const { validationResult } = require('express-validator');

const Persona = require('../models/personas')

const personaPost = async (req, res = response) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json(errors);
    }

    const { nombre, apellido, email, alias} = req.body;
    const persona = new Persona({nombre, apellido, email, alias});

    // Verificar si el correo existe
    const existeEmail = await Persona.findOne({ email });
    if( existeEmail ) {
        return res.status(400).json({
            msg: "El correo ya está registrado"
        })
    }

    // Verificamos si es un correo válido


    // Guardar en la DB
    await persona.save();

    
    res.json({
        msg:"persona post",
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


