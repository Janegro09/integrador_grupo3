const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { 
    existeCategoria, 
    existeId } = require('../helpers/db-validators');
const { 
    categoriaPost, 
    categoriaGet, 
    categoriaGetUno, 
    categoriaDelete } = require('../controller/categorias');

const router = Router();


router.post('/', [
    check('nombre','El nombre de la categoria no debe ser vacio').not().isEmpty(),
    check('nombre').custom( existeCategoria ),
    validarCampos
],categoriaPost);

router.get('/', categoriaGet);

router.get('/:id',[
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom( existeId ),
    validarCampos
], categoriaGetUno);

router.delete('/', categoriaDelete);


module.exports = router;
