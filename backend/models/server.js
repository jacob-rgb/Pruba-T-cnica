const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../DB/config');


class Server {

    constructor() { 
        this.app = express();
        this.port = 3800;

        //paths
        this.tarjetasPath = '/api/graphics-cards'

        // Conectar a base de datos
        this.conectarDB();

        //Middlewares
        this.middlewares()

        // Rutas de la aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {

         // CORS
         this.app.use( cors() )
         // Lectura y parseo del body
         this.app.use( express.json() );

         // Directorio Público
         this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.tarjetasPath, require('../routes/tarjetasRouter'));
        this.app.use( '*', express.static('public'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        })
    }

}

module.exports = Server;