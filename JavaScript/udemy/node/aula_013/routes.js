//importando bibliotecas
const express = require('express')

//declarando a variavel com as rotas para exportação posteriormente
const route = express.Router();

//importanto funções de cada requerimento
const homeController = require('./src/controllers/homeController.js')

//Declarando rotas
//home
route.get('/', meuMiddleware, homeController.paginaInicialGet)

//exportando variavel de rotas
module.exports = route;

//middlewares (funções a serem executadas apos a requisição e antes do envio de resposta)
function meuMiddleware(req, res, next) {
    console.log('a');
    next()
}
