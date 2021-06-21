const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { 
  validarCategoria, 
  validarPersona,
  existeIdPersonaEnLibros,
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
  check('descripcion','La descripción es requerida').not().isEmpty(),
  check('nombre').custom( existeNombreLibro ),
  validarCampos
], libroPut);

router.put('/prestar/:id', [
  check('id','La categoria es requerida').not().isEmpty(),
  check('id', 'No es un id válido').isMongoId(),
  check('id').custom( existeIdLibro ),
  check('persona_id','La categoria es requerida').not().isEmpty(),
  check('persona_id', 'No es un id válido').isMongoId(),
  check('persona_id', 'No existe la persona a la que se le quiere prestar el libro').custom( validarPersona ),
  check('id','El libro ya se encuentra prestado, no se puede prestar hasta que no se devuelva').custom( existeIdPersonaEnLibros ),
  validarCampos
  
], libroPrestar);

router.put('/devolver/:id', [
  check('id','La categoria es requerida').not().isEmpty(),
  check('id', 'No es un id válido').isMongoId(),
  check('id').custom( existeIdLibro ),
  check('persona_id','La categoria es requerida').not().isEmpty(),
  check('persona_id', 'No es un id válido').isMongoId(),
  check('persona_id', 'No existe la persona a la que se le quiere prestar el libro').custom( validarPersona ),
  check('id','Ese libro no estaba prestado').custom( !existeIdPersonaEnLibros ),
  validarCampos
], libroDevolver);

router.delete('/:id', [
  validarCampos

], libroDelete);


module.exports = router;
