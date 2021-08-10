const { Router } = require('express');
const { check } = require('express-validator')
const { obtenerTarjetas, obtenerTarjeta, obtenerTarjetasPorTermino } = require('../controllers/tarjetasController');
const { existeTarjetaPorId } = require('../helpers/existeTarjeta');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

// Obtener todas las tarjetas

router.get('/', [

],
obtenerTarjetas);

// Obtener una tarjeta por su id

router.get('/:id', [
    check('id', 'No es un id de mongo').isMongoId(),
    check('id').custom( existeTarjetaPorId ),
    validarCampos
], obtenerTarjeta);

// Obterner tarjetas por término de búsqueda

router.get('/termino/busqueda/:term', obtenerTarjetasPorTermino);

module.exports = router;