const express = require('express');

const cors = require('cors');


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.usersPath = "/api/users"

        this.middlewares()

        this.routes()
    }
    
    middlewares(){
        //cors
        this.app.use( cors() );

        //parseo y lectura de body
        this.app.use(express.json())
        
        //directorio publico
        this.app.use(express.static("public"))
    }

    routes(){

      this.app.use( this.usersPath, require("../routes/user"))


    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`servidor corriendo en ${this.port}`);
        })
    }

}

module.exports = Server;