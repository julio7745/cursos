//importando bibliotecas
const express = require('express')

//declarando a variavel com as rotas para exportação posteriormente
const route = express.Router();

//importanto funções de cada requerimento
const homeController = require('./controllers/homeController.js')
const contatoController = require('./controllers/contatoController.js')

//Declarando rotas

//home
route.get('/', homeController.paginaInicialGet)
route.post('/', homeController.paginaInicialPost)

//Contato
route.get('/contato', contatoController.contatoGet)
route.post('/contato', contatoController.contatoPost)


//exportando variavel de rotas
module.exports = route;