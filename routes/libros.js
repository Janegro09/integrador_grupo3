const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { 
  validarCategoria, 
  validarPersona,
  existeNombreLibro, 
  existeIdLibro} = require('../helpers/db-validators');

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
  check('categoria_id','La categoria es requerida').not().isEmpty(),
  check('categoria_id').isMongoId(),
  check('categoria_id').custom( validarCategoria ),
  check('persona_id').custom( validarPersona ),
  check('nombre').custom( existeNombreLibro ),
  validarCampos
], libroPost);

router.get('/', libroGet);

router.get('/:id', [
  check('id', 'No es un id válido').isMongoId(),
  check('id').custom( existeIdLibro ),
  validarCampos
], libroGetUno);

router.put('/:id', [
  check('id', 'No es un id válido').isMongoId(),
  check('id').custom( existeIdLibro ),
  check('nombre','El nombre es requerido').not().isEmpty(),
  check('descripcion','La descripción es requerida').not().isEmpty(),
  check('categoria_id','La categoria es requerida').not().isEmpty(),
  check('categoria_id').isMongoId(),
  check('categoria_id').custom( validarCategoria ),
  check('persona_id').custom( validarPersona ),
  check('nombre').custom( existeNombreLibro ),
  validarCampos

], libroPut);

router.delete('/:id', libroDelete);


module.exports = router;
