const { response } = require('express');
const Tarjeta = require('../models/tarjetaModel');

const obtenerTarjetas = async (req, res = response) => {

    try {
        const tarjetas = await Tarjeta.find();
        return res.status(200).json({
            ok: true,
            tarjetas
        });
    } catch (error) {
        console.log(error);
        throw new Error('Error al obtener las tarjetas');
    }

}

const obtenerTarjeta = async (req, res = response) => {

    const { id } = req.params;

        try {

            const tarjeta = await Tarjeta.findById(id);

           return res.status(200).json({
                ok: true,
                tarjeta
            })
            
        } catch (error) {
            console.log(error);
            throw new Error('Error al obtener la tarjetas');
        }

}

const obtenerTarjetasPorTermino = async (req, res = response) => {

    const { term } = req.params;

        try {

            const tarjetas = await Tarjeta.find({name: {$regex: term , $options:'i'}});

            return res.status(200).json({
                ok: true,
                tarjetas
            })
            
        } catch (error) {
            console.log(error);
            throw new Error('Error al obtener la tarjetas');
        }

}

module.exports = {
    obtenerTarjetas,
    obtenerTarjeta,
    obtenerTarjetasPorTermino,
}