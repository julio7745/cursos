//declara exprees (servidor)
const express = require('express')
const app = express();

//importa rotas
const routes = require('./routes.js');
const { request } = require('http');

//declara renderizador
app.set('views', './src/views/');
app.set('view engine', 'ejs');

// Podemos usar form. com POST
app.use(express.urlencoded({extended: true})); 

//declara objetos estaticos
app.use(express.static('./public'))

//usa as rotas
app.use(routes) 

//importa e usa middlewares
const midllewares = require('./src/middleware/middleware.js')
app.use(midllewares.check404Error)

//inicia servidor
app.listen(3000, () => {
    console.log(`Acessar http://localhost:3000`);
})
