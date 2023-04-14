const express = require('express')
const route = express.Router();

const homeController = require('./src/controllers/homeController.js')

//Declarando rotas
//home
route.get('/', homeController.paginaInicialGet)

//exportando variavel de rotas
module.exports = route;
