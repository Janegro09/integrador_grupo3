
const { response } = require('express');
const { validationResult } = require('express-validator');
const Categoria = require('../models/categorias');


const categoriaPost = async (req, res = response) => {

    const { nombre } = req.body;
    const categoria = new Categoria({ nombre });
    
    const existeNombre = await Categoria.findOne({ nombre });
    if( existeNombre ) {
        return res.status(400).json({
            msg: "La categoría ya está registrada"
        })
    }

    // Verificamos si es un correo válido

    // Guardar en la DB
    await categoria.save();

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


