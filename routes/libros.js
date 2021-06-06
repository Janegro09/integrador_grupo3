const { Router } = require('express');
const { check } = require('express-validator');
const Categoria = require('../models/categoria');

const { 
  libroPost, 
  libroGet, 
  libroGetUno, 
  libroPut, 
  libroDelete } = require('../controller/libros');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();


router.post('/',[
  check('nombre','El nombre es requerido').not().isEmpty(),
  check('descripcion','La descripción es requerida').not().isEmpty(),
  check('categoria','La categoria es requerida').not().isEmpty(),
  check('categoria').custom( async ( categoria = '' ) => {
    const existeCategoria = await Categoria.findOne( {categoria} );
    if(!existeCategoria) {
      throw new Error(`No existe la categoria en ${categoria} la base de datos`)
    }
  }),
  validarCampos
], libroPost);

router.get('/', libroGet);

router.get('/:id', libroGetUno);

router.put('/', libroPut);

router.delete('/', libroDelete);


module.exports = router;
