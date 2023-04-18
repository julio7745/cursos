const express = require('express')
const app = express();

const routes = require('./routes.js')

app.set('views', './src/views/');
app.set('view engine', 'ejs');

app.use(express.static('./public'))

const middleware = require('./src/middlewares/global.js')
app.use(middleware.global)
app.use(routes) 

app.listen(3000, () => {
    console.log(`Acessar http://localhost:3000`);
})
