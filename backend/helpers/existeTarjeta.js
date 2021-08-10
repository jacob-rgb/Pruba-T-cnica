
const Tarjeta = require('../models/tarjetaModel');

const existeTarjetaPorId = async (id) => {
    const tarjetaExiste = await Tarjeta.findById(id);

    if(!tarjetaExiste) {
        throw new Error(`La tarjeta con id ${id}, no existe`);
    }
}
module.exports = {
    existeTarjetaPorId
}