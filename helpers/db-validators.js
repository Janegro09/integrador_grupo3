const Categoria = require('../models/categoria');
const libro = require('../models/libro');
const Persona = require('../models/persona');


const validarCategoria = async ( categoria = '' ) => {
    let nombre = categoria.toUpperCase();
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
  
const existeMail = async ( email ) => {

  const existeEmail = await Persona.findOne({ email });
    if( existeEmail ) {
      throw new Error(`Ya existe el correo ${email} en la base de datos`);
    }
}


const existeCategoria = async (categoria) => {

  let nombre = categoria.toUpperCase();
  const laCate = await Categoria.findOne({ nombre });
  if( laCate ) {
      throw new Error(`Ya existe la categoría ${nombre} en la base de datos`);
  }

}

const existeId = async (id) => {

  const elId = await Categoria.findById( id );
  
  if( !elId ) {
      throw new Error(`No existe id ${id} en la base de datos`);
    }
    
  }
  
  const existeEnLibros = async (id) => {
    
    const { nombre } = await Categoria.findById( id );
    const encontradoEnLibros = await libro.findOne( {categoria:nombre} )
    if( encontradoEnLibros ) {
      throw new Error(`No se puede borrar la categoria ${nombre} porque está siendo usada`);
  }
}

module.exports = {
    validarCategoria,
    validarPersona,
    existeMail,
    existeCategoria,
    existeId,
    existeEnLibros
}