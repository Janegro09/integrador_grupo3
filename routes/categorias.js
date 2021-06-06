const { Router } = require('express');
const { categoriaPost, categoriaGet, categoriaGetUno, categoriaPut, categoriaDelete } = require('../controller/categorias');

const router = Router();


router.post('/', categoriaPost);

router.get('/', categoriaGet);

router.get('/:id', categoriaGetUno);

router.put('/', categoriaPut);

router.delete('/', categoriaDelete);


module.exports = router;
