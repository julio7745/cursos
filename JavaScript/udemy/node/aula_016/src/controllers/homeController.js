exports.home = (req, res) => {
    res.render('index.ejs');
}


//Session
exports.mandaSession = (req, res) => {
    //Ao receber o requerimento, ele pode ter a sessão preenchida com dados no formato de objetos
    req.session.usuario = {nome: 'Julio', logado: true}
    res.render('index.ejs');
}
exports.recebeSession = (req, res) => {
    //aqui, estamos lendo a sessão
    console.log(req.session.usuario)
    res.render('index.ejs');
}

//FLASH
exports.mandaFlash = (req, res) => {

    req.flash('Nome do flash', 'mensagem do flash')
    //estamos armazenando uma array chamada 'Nome do flash' no banco de dados, com uma string
    res.render('index.ejs');

}
exports.usaFlash = (req, res) => {

    console.log(req.flash('Nome do flash')); 
    //estamos lendo o conteudo da array nome do flash

    res.render('index.ejs');
}

