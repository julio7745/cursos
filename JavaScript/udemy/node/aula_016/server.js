const express = require('express')
const app = express();

require('dotenv').config()

const mongoose = require('mongoose')

const routes = require('./routes.js')

app.set('views', './src/views/');
app.set('view engine', 'ejs');

/***************************/
// SESSION --> dados que vão ficar armazenados temporariamente

//Importando biblioteca de sessões 
const session = require('express-session')
//Importando biblioteca que relaciona a conexão das sessões com o mongo, e já relacionando 
const ConnectMongo = require('connect-mongo')(session)

//criando configurações da sessão
const sessionOptions = session({
    //aleatório, tipo uma criptografia
    secret: 'asdwedasd324',
    //estamos armazenando no mongodb
    store: new ConnectMongo({ mongooseConnection: mongoose.connection }), 
    //outras configurações
    resave: false, 
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60,    //tempo que o dado vai ficar salvo em (ms) 
        httpOnly: true
    }
})
//estamos falando que o servidor vai usar a configuração da sessão criada
app.use(sessionOptions)

//Agora criamos uma sessão no documento './src/controllers/homeController.js
/***************************/


/***************************/
//FLASH  -->   Dados que só podem ser acessados uma vez no banco de dados e dps somem

const flash = require('connect-flash')
//incluimos a bilblioteca 

app.use(flash())
//dizemos ao servidor para usar o flash

/***************************/

app.use(routes) 

mongoose.connect(process.env.LOGIN, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('conectou');
        app.emit('iniciar servidor')
    })
    .catch(e => console.log(e))

app.on('iniciar servidor', () => {
    app.listen(3000, () => {
        console.log(`Acessar http://localhost:3000`);
    })
})
