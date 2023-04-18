const express = require('express')
const route = express.Router();

const homeController = require('./src/controllers/homeController.js')

route.get('/', homeController.home)

module.exports = route;
