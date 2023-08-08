//Cria objeto ctt
const contato = require("../models/contatoModel")

//exporta resposta para requerimento /
exports.index = async(req, res) => {

    // recebe os contatos
    const contatos = await contato.buscaTodos(req.session.user._id)

    //envia a pagina principal e os contatos como variavel da resposta
    res.render('pages/index.ejs', {contatos} );
}
