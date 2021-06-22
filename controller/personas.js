
const { response } = require('express');
const session = require('express-session');
const Persona = require('../models/persona');

const personaPost = async (req, res = response) => {

    const { nombre, apellido, email, alias} = req.body;
    const persona = new Persona({nombre, apellido, email, alias});

    // Verificar si el correo existe
    
    // Guardar en la DB
    await persona.save();
    const {_id } = persona; 
    // id: numerico, 
    // nombre: string, 
    // apellido: string, 
    // alias: string, 
    // email: string
    res.json({
        _id,
        nombre,
        apellido,
        alias,
        email
    });
}

const personaLogin = async (req, res = response) => {

    const personas = await Persona.find()

    res.json({
        personas
    });
}

const personaGet = async (req, res = response) => {

    const personas = await Persona.find()

    res.json({
        personas
    });
}

const personaGetUno = async (req, res = response) => {

    let { id } = req.params
    let persona = await Persona.findOne({_id:id});
    const { nombre, _id, apellido, alias, email} = persona; 

    res.json({
        _id,
        nombre,
        apellido,
        alias,
        email
    });
}

const personaPut = async (req, res = response) => {

    let { id } = req.params    
    const { email, ...resto} = req.body;
    let persona = await Persona.findByIdAndUpdate(id,resto);
    
    res.json({
        msg:`Usuario modificado correctamente`
    });
}

const personaDelete = async (req, res = response) => {


    const { id } = req.params;
    // Borrado fisico
    await Persona.findByIdAndDelete(id);

    // Borrado logico
    // const { nombre } = await Categoria.findByIdAndUpdate({estado:false});
    
    res.json({
        msj: "Se borró correctamente"
    });
}


module.exports = {
    personaPost,
    personaGet,
    personaGetUno,
    personaPut,
    personaDelete
}


