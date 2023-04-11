
//exportando funções

//Get
module.exports.paginaInicialGet = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="Nome">  
            <input type="submit">
        </form>
    `)
}

//Post
module.exports.paginaInicialPost = (req, res) => {
    res.send(`
        Formulario Recebido<br>
        <a href="/">voltar</a>
    `)
}