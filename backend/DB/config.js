const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('Base de datos onLine');

    } catch (error) {
        console.log(err);
        throw new Error('Error a la hora de iniciar db');
    }
}

module.exports = {
    dbConnection
}