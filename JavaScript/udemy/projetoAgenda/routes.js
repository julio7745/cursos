//declara express
const express = require('express')

//declara que o  modulo são rotas do express
const route = express.Router();

//ROTAS

// home
const homeController = require('./src/controllers/homeController.js')
route.get('/home', homeController.index)

//login
const loginController = require('./src/controllers/loginController.js')
route.get('/login', loginController.index)
route.post('/login/register', loginController.register)

//exporta respostas a cada rotas
module.exports = route;
