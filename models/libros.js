const { Schema, model } = require('mongoose');

const LibroSchema = Schema({

    // id: {
    //     type: String,
    //     unique: true
    // },
    nombre: {
        type: String,
        required: [true, 'El nombre del libro es obligatorio'],
        unique: true
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción del libro es obligatoria']
    },
    categoria: {
        type: String,
        required: [true, 'La categoria es obligatoria']
    },
    persona_id: {
        type:String,
    },
    estado: {
        type: Boolean,
        default:true
    }

});


module.exports = model( 'Libro', LibroSchema )