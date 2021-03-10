const express = require('express')
const router = express.Router()
const homeProyectos = require('../controllers/proyectosController')

module.exports = () => {
    router.get('/', homeProyectos.preyectosHome )
    router.get('/nuevoProyecto', homeProyectos.nuevoProyecto)
    router.post('/nuevoProyecto', homeProyectos.crearProyecto)



    return router
}






