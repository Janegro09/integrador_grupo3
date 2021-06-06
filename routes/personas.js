const { Router } = require('express');
const { check } = require('express-validator');

const { 
    personaGet, 
    personaPost, 
    personaPut, 
    personaGetUno, 
    personaDelete } = require('../controller/personas');

const router = Router();

router.post('/', [
    check('email','El correo no es válido').isEmail()
] ,personaPost);

router.get('/', personaGet);

router.get('/:id', personaGetUno);

router.put('/', personaPut);

router.delete('/', personaDelete);


module.exports = router;
