const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { 
    categoriaPost, 
    categoriaGet, 
    categoriaGetUno, 
    categoriaPut, 
    categoriaDelete } = require('../controller/categorias');

const router = Router();


router.post('/', [
    check('nombre','El nombre de la categoria no debe ser vacio').not().isEmpty(),
    validarCampos
],categoriaPost);

router.get('/', categoriaGet);

router.get('/:id', categoriaGetUno);

router.delete('/', categoriaDelete);


module.exports = router;
