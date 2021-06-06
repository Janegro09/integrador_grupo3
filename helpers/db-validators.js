const Categoria = require('../models/categoria');
const Persona = require('../models/persona');


const validarCategoria = async ( nombre = '' ) => {
    const existeCategoria = await Categoria.findOne( {nombre} );
    if(!existeCategoria) {
      throw new Error(`No existe la categoria en ${nombre} la base de datos`)
    }
  }

const validarPersona = async ( id = '' ) => {

    if(id!=''){   
        const existePersona = await Persona.findById( {_id:id} );
        if( !existePersona) {
            throw new Error(`No existe la persona con el id ${id} en la base de datos`)
        }
    }
  }

module.exports = {
    validarCategoria,
    validarPersona
}