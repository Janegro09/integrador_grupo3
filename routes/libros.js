const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarCategoria, validarPersona } = require('../helpers/db-validators');

const { 
  libroPost, 
  libroGet, 
  libroGetUno, 
  libroPut, 
  libroDelete } = require('../controller/libros');

const router = Router();

router.post('/',[
  check('nombre','El nombre es requerido').not().isEmpty(),
  check('descripcion','La descripción es requerida').not().isEmpty(),
  check('categoria','La categoria es requerida').not().isEmpty(),
  check('categoria').custom( validarCategoria ),
  check('persona_id').custom( validarPersona ),
  validarCampos
], libroPost);

router.get('/', libroGet);

router.get('/:id', libroGetUno);

router.put('/', libroPut);

router.delete('/', libroDelete);


module.exports = router;
