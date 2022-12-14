const express = require('express')
const MateriasRouter = require('./routes/Materias')
const AlumnosRouter = require('./routes/Alumnos')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT

        this.paths = {
            Materias: "/api/v1/Materias",
            Alumnos: "/api/v1/Alumnos"
        }
        this.middlewares()
        this.routes()
    }
    routes(){ ','
        //this.app.get('/', (req, res) => {
        //res.send('Mensaje recibido')
       // }) //End point

       this.app.use(this.paths.Materias, MateriasRouter)
       this.app.use(this.paths.Alumnos, AlumnosRouter)
 }
    middlewares(){
        this.app.use(cors())// habilita origen curzado
        this.app.use(express.json())
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port)
        })
    }
}
module.exports = Server
