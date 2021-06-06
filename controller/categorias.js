
const { response } = require('express');
const { validationResult } = require('express-validator');
const Categoria = require('../models/categoria');


const categoriaPost = async (req, res = response) => {

    const { nombre } = req.body;

    const categoria = new Categoria( {nombre} );
    console.log(categoria)
    const existeCategoria = await Categoria.findOne({ nombre });
    console.log(existeCategoria)
    if( existeCategoria ) {
        return res.status(400).json({
            msg: `La categoria ${nombre} ya está registrada`
        })
    }

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


