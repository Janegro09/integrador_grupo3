
const { response } = require('express');
const { validationResult } = require('express-validator');
const { validarCategoria } = require('../helpers/db-validators');
const Categoria = require('../models/categoria');
const Libro = require('../models/libro');


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

const categoriaDelete = async (req, res = response) => {

    const { id } = req.params;
    // Borrado fisico
    const { nombre } = await Categoria.findByIdAndDelete(id);

    // Borrado logico
    // const { nombre } = await Categoria.findByIdAndUpdate({estado:false});
    
    res.json({
        msj: "Categoria borrada correctamente"
    });
}


module.exports = {
    categoriaPost,
    categoriaGet,
    categoriaGetUno,
    categoriaDelete
}


