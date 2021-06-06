const { Router } = require('express');
const { 
    personaGet, 
    personaPost, 
    personaPut, 
    personaGetUno, 
    personaDelete } = require('../controller/personas');

const router = Router();

router.post('/', personaPost);

router.get('/', personaGet);

router.get('/:id', personaGetUno);

router.put('/', personaPut);

router.delete('/', personaDelete);


module.exports = router;
