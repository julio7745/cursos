const express = require('express')
const route = express.Router();

const homeController = require('./src/controllers/homeController.js')

route.get('/', homeController.home)
route.get('/mandaSession', homeController.mandaSession)
route.get('/recebeSession', homeController.recebeSession)
route.get('/mandaFlash', homeController.mandaFlash)
route.get('/usaFlash', homeController.usaFlash)

module.exports = route;
