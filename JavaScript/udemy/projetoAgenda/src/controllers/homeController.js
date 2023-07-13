const contato = require("../models/contatoModel")


//exporta resposta para requerimento /
exports.index = async(req, res) => {
    const contatos = await contato.buscaTodos()
    res.render('pages/index.ejs', {contatos} );
}
