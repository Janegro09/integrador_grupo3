
const { response } = require('express');

const Libro = require('../models/libro');


const libroPost = async (req, res = response) => {

    let { nombre, descripcion, categoria_id, persona_id} = req.body;
    
    nombre      = nombre.toUpperCase();
    descripcion = descripcion.toUpperCase();

    let libro = new Libro({ nombre, descripcion, categoria_id, persona_id});
    // Guardar en la DB
    await libro.save();
    const {_id} = libro;
    
    res.json({
        _id,
        nombre, 
        descripcion, 
        categoria_id, 
        persona_id
    });
}

const libroGet = async (req, res = response) => {

    const libros = await Libro.find();

    res.json({
        libros
    });
}

const libroGetUno = async (req, res = response) => {

    const { id } = req.params
    const { nombre, descripcion, categoria_id, persona_id } = await Libro.findById(id)

    res.json({
        id,
        nombre,
        descripcion,
        categoria,
        persona_id
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


