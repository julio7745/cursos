//importando bibliotecas
const express = require('express')
const app = express();
app.use(express.urlencoded({extended: true})); // --> Podemos usar form. com POST

//importando rotas
const routes = require('./routes.js')
app.use(routes)                     // ---> Aqui estamos dizendo pro app usar as rotas importadas

//iniciando servidor 
app.listen(3000, () => {
    console.log(`Acessar http://localhost:3000`);
})