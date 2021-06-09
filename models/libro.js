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
    categoria_id: {
        type: String,
        required: [true, 'La categoria del libro es obligatoria']
    },
    persona_id: {
        type:String,
        default:null
    },
    estado: {
        type: Boolean,
        default:true
    }

});

// LibroSchema.methods.toJSON = function() {
//     const { __v } = this.toObject();
// }

module.exports = model( 'Libro', LibroSchema )