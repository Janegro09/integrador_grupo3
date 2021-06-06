const { Schema, model} = require('mongoose');

const CategoriaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'La categoria es obligatoria'],
        unique: true
    },
})


module.exports = model('Categoria', CategoriaSchema)