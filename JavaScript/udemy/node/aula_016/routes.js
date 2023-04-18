const express = require('express')
const route = express.Router();

const homeController = require('./src/controllers/homeController.js')

route.get('/', homeController.home)
route.get('/2', homeController.home2)

module.exports = route;
