const Categoria = require('../models/categoria');
const Libro = require('../models/libro');
const Persona = require('../models/persona');


const validarCategoria = async ( id = '' ) => {
    const existeCategoria = await Categoria.findById( id );
    if(!existeCategoria) {
      throw new Error(`No existe la categoria en ${id} la base de datos`)
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

const validarLibroDisponible = async ( id = '' ) => {

  const {persona_id} = await Libro.findById( id );
  if( persona_id ) {
      throw new Error(`Ese libro está siendo usado`);
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

const existeIdPersona = async ( id ) => {

  const elId = await Persona.findById( id );

  if( !elId ) {
      throw new Error(`No existe id ${id} en la base de datos`);
    }
  
}

const existeIdLibro = async ( id ) => {

  const elId = await Libro.findById( id );

  if( !elId ) {
      throw new Error(`No se encontró el libro`);
    }
  
}

const existeId = async ( id ) => {

  const elId = await Categoria.findById( id );

  if( !elId ) {
      throw new Error(`No existe id ${id} en la base de datos`);
    }
}
  
const existeCategoriaEnLibros = async (id) => {
    
  const encontradoEnLibros = await Categoria.findById( id );
  if( encontradoEnLibros ) {
    throw new Error(`No se puede borrar la categoria ${nombre} porque está siendo usada`);
  }
}

const existeIdPersonaEnLibros = async (id) => {

  const encontradoEnLibros = await Libro.findOne( {persona_id:id} );
  console.log(encontradoEnLibros)
    
  if( encontradoEnLibros ) {
    throw new Error(`Existe una persona asignada a ese libro`);
  }
}

const existePersonaEnLibro = async (id) => {

  const { persona_id } = await Libro.findById( id );
  if ( !persona_id ) {
    throw new Error('Ese libro no estaba prestado')
  }
}

const existeNombreLibro = async ( name ) => {
    
  let nombre = name.toUpperCase();
  // Verificar si el nombre del libro existe
  const existeNombre = await Libro.findOne({ nombre });
  if( existeNombre ) {
    throw new Error('El libro ya está registrado')
  }
  
}

module.exports = {
    validarCategoria,
    validarPersona,
    existeMail,
    existeCategoria,
    existeId,
    existeIdPersona,
    existeCategoriaEnLibros,
    existeNombreLibro,
    existeIdPersonaEnLibros,
    existeIdLibro,
    validarLibroDisponible,
    existePersonaEnLibro
}