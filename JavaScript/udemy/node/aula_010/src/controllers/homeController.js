
//exportando funções

//Get
module.exports.paginaInicialGet = (req, res) => {
    res.render('index.ejs');
}

//Post
module.exports.paginaInicialPost = (req, res) => {
    res.send(`
        Formulario Recebido<br>
        <a href="/">voltar</a>
    `)
}