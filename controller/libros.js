
const { response } = require('express');
const libro = require('../models/libro');

const Libro = require('../models/libro');


const libroPost = async (req, res = response) => {

    let { nombre, descripcion, categoria_id, persona_id} = req.body;
    
    nombre      = nombre.toUpperCase();
    descripcion = descripcion.toUpperCase();
    try {
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
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Error inesperado"
        });
    }
}

const libroGet = async (req, res = response) => {

    try {
        const libros = await Libro.find();
    
        res.json({
            libros
        });
        
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Error inesperado"
        });
    }
}

const libroGetUno = async (req, res = response) => {

    const { id } = req.params;
    
    try {        
        const { nombre, descripcion, categoria_id, persona_id } = await Libro.findById(id);
        res.json({
            id,
            nombre,
            descripcion,
            categoria_id,
            persona_id
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Error inesperado"
        });
    }

}

const libroPut = async (req, res = response) => {

    let { id } = req.params    
    let { descripcion, ...resto} = req.body;
    descripcion = descripcion.toUpperCase();

    try {
        let libro = await Libro.findByIdAndUpdate(id,{descripcion});
        const { nombre, _id, categoria_id,persona_id  } = libro;
        res.json({
            _id,
            nombre,
            descripcion,
            categoria_id,
            persona_id
        });
        
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Error inesperado"
        });
    }

}

const libroDelete = (req, res = response) => {

    const { id } = req.params;

    try {
        // Fisicamente lo borramos
        await Libro.findByIdAndDelete(id);
        res.json({
            messaje:"Se borró correctamente"
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Error inesperado"
        });
    }
}




module.exports = {
    libroPost,
    libroGet,
    libroGetUno,
    libroPut,
    libroDelete
}


