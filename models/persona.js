const { Schema, model } = require('mongoose');

const PersonaSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true
    },
    alias: {
        type: String,
        required: [true, 'El Alias es obligatorio']
    },
    estado: {
        type: Boolean,
        default:true
    }

});

// PersonaSchema.methods.toJSON = function() {
//     const { __v } = this.toObject();
// }

module.exports = model( 'Personas', PersonaSchema )