
const { response } = require('express');
const { validationResult } = require('express-validator');
const Categoria = require('../models/categoria');


const categoriaPost = async (req, res = response) => {

    const { categoria } = req.body;
    const nuevaCategoria = new Categoria({ categoria });
    const nuevoNombre = nuevaCategoria.categoria;
    
    const existeCategoria = await Categoria.findOne({ categoria:nuevoNombre });
    if( existeCategoria ) {
        return res.status(400).json({
            msg: `La categoria ${nuevoNombre} ya está registrada`
        })
    }

    // Guardar en la DB
    await nuevaCategoria.save();

    res.json({
        categoria
    });
}

const categoriaGet = (req, res = response) => {

    res.json({
        id: "numerico",
        nombre:"string",
        apellido: "string",
        alias: "string",
        email: "string"
    });
}

const categoriaGetUno = (req, res = response) => {

    res.json({
        id: "numerico",
        nombre:"string",
        apellido: "string",
        alias: "string",
        email: "string"
    });
}

const categoriaPut = (req, res = response) => {

    res.json({
        id: "numerico",
        nombre:"string",
        apellido: "string",
        alias: "string",
        email: "string"
    });
}

const categoriaDelete = (req, res = response) => {

    res.json({
        id: "numerico",
        nombre:"string",
        apellido: "string",
        alias: "string",
        email: "string"
    });
}


module.exports = {
    categoriaPost,
    categoriaGet,
    categoriaGetUno,
    categoriaPut,
    categoriaDelete
}


