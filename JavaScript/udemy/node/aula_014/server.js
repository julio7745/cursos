const express = require('express')
const app = express();

require('dotenv').config()

//importando modulo de base de dados
const mongoose = require('mongoose')

//mandando conectar
mongoose.connect(process.env.LOGIN, { useNewUrlParser: true, useUnifiedTopology: true })
    //A função conect retorna uma processa, logo, quando ela for resolvida, emitimos uma mensagem
    .then(() => {
        console.log('conectou');
        app.emit('pronto')
    })
    .catch(e => console.log(e))

const routes = require('./routes.js')

app.set('views', './src/views/');
app.set('view engine', 'ejs');

app.use(express.static('./public'))

app.use(routes) 

//quando a mensagem for recebida
app.on('pronto', () => {
    //iniciamos o servidor
    app.listen(3000, () => {
        console.log(`Acessar http://localhost:3000`);
    })
})
