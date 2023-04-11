const express = require('express')
const app = express();
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send(`
    <h1>Pagina inicial<\h1>
    <form action="/testes" method="post">
        <input name="mensagem" type="text">
        <input type="submit">
    </form>
    `)
})

/*
app.get('/testes/:mensagem?', (req, res) => {
    console.log(req.params.mensagem);
    res.send('Obrigado pelo contato')
})*/


/*
app.get('/testes/:mensagem?/:nome?', (req, res) => {
    console.log(req.params.mensagem);
    console.log(req.params.nome);
    res.send('Obrigado pelo contato')
})*/

app.get('/testes', (req, res) => {
    console.log(req.query.mensagem);
    res.send('Obrigado pelo contato')
})

app.post('/testes', (req, res) => {
    console.log(req.body);
    res.send(`Obrigado pelo contato ${req.body.mensagem}`)
})


app.listen(3000, () => {
    console.log('Servidor executando');
    console.log('Acessar http://localhost:3000');
})