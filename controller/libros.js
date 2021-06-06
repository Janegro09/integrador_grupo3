
const { response } = require('express');

const Libro = require('../models/libros');


const libroPost = async (req, res = response) => {

    const { nombre, descripcion, categoria, persona_id} = req.body;
    const libro = new Libro({ nombre, descripcion, categoria, persona_id});

    // Verificar si el nombre del libro existe
    const existeNombre = await Libro.findOne({ nombre });
    if( existeNombre ) {
        return res.status(400).json({
            msg: "El libro ya está registrado"
        });
    }

    // Verificamos si es un correo válido

    // Guardar en la DB
    await libro.save();
    
    res.json({
        libro
    });

    res.json({
        id: "numerico",
        nombre:"string",
        apellido: "string",
        alias: "string",
        email: "string"
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


