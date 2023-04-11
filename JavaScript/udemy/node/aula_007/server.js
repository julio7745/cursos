const express = require('express')
const app = express();

//app.requestMethod --> requestMethod = POST   GET  PUT        DELETE
//                                      criar  ler  atualizar  deletar

// mesmo que seja a mesma requisição, ele vai devolver coisas diferentes para cada 
// metodo da requisição 

app.get('/', (req, res) => {
    res.send('<h1>Deu certo<\h1>')
})
app.get('/contato', (req, res) => {
    res.send('Obrigado pelo contato')
})


app.listen(3000, () => {
    console.log('Servidor executando');
    console.log('Acessar http://localhost:3000');
})