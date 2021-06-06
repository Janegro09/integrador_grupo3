const { Router } = require('express');
const { check } = require('express-validator');

const { 
    personaGet, 
    personaPost, 
    personaPut, 
    personaGetUno, 
    personaDelete } = require('../controller/personas');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/', [
    check('nombre','El nombre no debe ser vacio').not().isEmpty(),
    check('apellido','El apellido no debe ser vacio').not().isEmpty(),
    check('alias','El alias no debe ser vacio').not().isEmpty(),
    check('email','El correo no es válido').isEmail(),
    validarCampos
] ,personaPost);

router.get('/', personaGet);

router.get('/:id', personaGetUno);

router.put('/', personaPut);

router.delete('/', personaDelete);


module.exports = router;
