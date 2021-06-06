
const { response } = require('express');
const { validationResult } = require('express-validator');
const Categoria = require('../models/categoria');


const categoriaPost = async (req, res = response) => {

    let { nombre } = req.body;
    nombre = nombre.toUpperCase();
    const categoria = new Categoria( {nombre} );

    // Guardar en la DB
    await categoria.save();
    const {id} = categoria;
    
    res.json({
        nombre,
        id
    });
}

const categoriaGet = async (req, res = response) => {

    let categorias = await Categoria.find();
    
    res.json({
        categorias
    });
}

const categoriaGetUno = async (req, res = response) => {
    let { id } = req.params
    let categorias = await Categoria.findOne({_id:id});
    const { nombre, _id} = categorias; 
    res.json({
        _id,
        nombre
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
    categoriaDelete
}


