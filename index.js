const express = require('express');
const path = require('path')
const routes = require('./routes/proyectosRoute')
const bodyParser = require('body-parser')
//Inicializar express
const app = express();

// rutas
app.use('/', routes())
//vistas
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './views'))
//config
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('public'))


//server
app.listen(3000)