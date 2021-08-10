const { Schema, model} = require('mongoose');

const TarjetaSchema = Schema({
    name: {
        type: String,
    },
    model: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    stock: {
        type: Number
    },
    manufacturer: {
        type: String
    }
});

TarjetaSchema.methods.toJSON = function() {
    const { __v, estado,   ...data } = this.toObject();
    return data;
}

module.exports = model('Tarjeta', TarjetaSchema);