const express = require('express')
const cors = require('cors'):
const { dbConection } = require('../database/config')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;      

        this.personaPath ='../routes/personas',
        this.libroPath ='../routes/libros',
        this.categoriaPath ='../routes/categorias',


        // Conectar a la base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

    }

    async conectarDB() {
        await dbConection();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parse del body
        this.app.use( express.json() );

        // Directorio público
        this.app.use(express.static('public'));

    }

    routes(){
        this.app.use('/persona', require(this.personaPath));
        this.app.use('/libro', require(this.libroPath));
        this.app.use('/categoria', require(this.categoriaPath));
    }
    
    listen() {

        this.app.listen(this.port, () => {
            console.log(`Corriendo app desde el puerto ${this.port}`)
        })
    }
}
module.exports = Server