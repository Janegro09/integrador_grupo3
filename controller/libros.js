
const { response } = require('express');
const { validationResult } = require('express-validator');

const Libro = require('../models/libro');


const libroPost = async (req, res = response) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json(errors);
    }

    let { nombre, descripcion, categoria, persona_id} = req.body;
    
    nombre      = nombre.toUpperCase();
    descripcion = descripcion.toUpperCase();
    categoria   = categoria.toUpperCase();

    const libro = new Libro({ nombre, descripcion, categoria, persona_id});

    // Verificar si el nombre del libro existe
    const existeNombre = await Libro.findOne({ nombre });
    if( existeNombre ) {
        return res.status(400).json({
            msg: "El libro ya está registrado"
        });
    }

    // Guardar en la DB
    await libro.save();
    
    res.json({
        libro
    });
}

const libroGet = (req, res = response) => {

    
    res.json({
        id: "numerico",
        nombre:"string",
        apellido: "string",
        alias: "string",
        email: "string"
    });
}

const libroGetUno = (req, res = response) => {

    res.json({
        id: "numerico",
        nombre:"string",
        apellido: "string",
        alias: "string",
        email: "string"
    });
}

const libroPut = (req, res = response) => {

    res.json({
        id: "numerico",
        nombre:"string",
        apellido: "string",
        alias: "string",
        email: "string"
    });
}

const libroDelete = (req, res = response) => {

    res.json({
        id: "numerico",
        nombre:"string",
        apellido: "string",
        alias: "string",
        email: "string"
    });
}


module.exports = {
    libroPost,
    libroGet,
    libroGetUno,
    libroPut,
    libroDelete
}


