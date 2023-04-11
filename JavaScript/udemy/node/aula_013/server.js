//importando bibliotecas e configurando 
const express = require('express')
const app = express();

app.use(express.urlencoded({extended: true})); // --> Podemos usar form. com POST

//importando missleware blogal -> função a ser executada em toda requisição
const middlewareBlogal = require('./src/middlewares/middleware.js')

//declaramos as paginas que serão renderizadas e o renderizador 
app.set('views', './src/views');
app.set('view engine', 'ejs');

//declaramos o conteudo estatico 
app.use(express.static('./public'))

//usando middleware ANTES da rota
app.use(middlewareBlogal.antes)

//importando rotas
const routes = require('./routes.js')
app.use(routes) // --> Aqui estamos dizendo pro app usar as rotas importadas

//usando middleware depois da rota
app.use(middlewareBlogal.depois)

//iniciando servidor 
app.listen(3000, () => {
    console.log(`Acessar http://localhost:3000`);
})