//importando bibliotecas e configurando 
const express = require('express')
const app = express();

app.use(express.urlencoded({extended: true})); // --> Podemos usar form. com POST
app.set('views', './src/views');
app.set('view engine', 'ejs');

//importando rotas
const routes = require('./routes.js')
app.use(routes) // --> Aqui estamos dizendo pro app usar as rotas importadas


//iniciando servidor 
app.listen(3000, () => {
    console.log(`Acessar http://localhost:3000`);
})