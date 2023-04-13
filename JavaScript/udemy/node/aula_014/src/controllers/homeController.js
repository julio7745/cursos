
//exportando funções

//Get
module.exports.paginaInicialGet = (req, res, next) => {
    res.render('index.ejs');
    console.log();
    next()
}
