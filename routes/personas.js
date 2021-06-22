const { Router } = require('express');
const { check } = require('express-validator');

const { 
    personaGet, 
    personaPost, 
    personaPut, 
    personaGetUno, 
    personaDelete } = require('../controller/personas');

const { 
    existeMail, 
    existeIdPersona,
    existeIdPersonaEnLibros } = require('../helpers/db-validators');

const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/login', personaLogin);

router.post('/', [
    check('nombre','El nombre no debe ser vacio').not().isEmpty(),
    check('apellido','El apellido no debe ser vacio').not().isEmpty(),
    check('alias','El alias no debe ser vacio').not().isEmpty(),
    check('email','El correo no es válido').isEmail(),
    check('email').custom( existeMail ),
    validarCampos
] ,personaPost);

router.get('/', personaGet);

router.get('/:id', [
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom( existeIdPersona ),
    validarCampos
], personaGetUno);

router.put('/:id', [
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom( existeIdPersona ),
    check('nombre','El nombre no debe ser vacio').not().isEmpty(),
    check('apellido','El apellido no debe ser vacio').not().isEmpty(),
    check('alias','El alias no debe ser vacio').not().isEmpty(),
    validarCampos
], personaPut);

router.delete('/:id', [
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom( existeIdPersona ),
    check('id').custom( existeIdPersonaEnLibros ),
    validarCampos
], personaDelete);


module.exports = router;
