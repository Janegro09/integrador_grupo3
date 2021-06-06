const { Router } = require('express');
const { 
  libroPost, 
  libroGet, 
  libroGetUno, 
  libroPut, 
  libroDelete } = require('../controller/libros');

const router = Router();


router.post('/', libroPost);

router.get('/', libroGet);

router.get('/:id', libroGetUno);

router.put('/', libroPut);

router.delete('/', libroDelete);


module.exports = router;
