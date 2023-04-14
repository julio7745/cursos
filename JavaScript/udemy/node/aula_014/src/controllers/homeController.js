
//carregamos modelo de dado criado
const homeModel = require('../models/homeModel.js')

//criamos uma pagina com o modelo enviamos pro banco de dados
homeModel.create({
    titulo: "Segundo",
    descricao: "Mais uma dnv"
})
    .then(dados => console.log(dados))      //se der certo, ele imprime o que foi salvo
    .catch(e => console.log(e))

//buscamos as pafinas no banco de dados
homeModel.find()
    .then(dados => console.log(dados))      //se der certo, ele imprime o que foi carregado
    .catch(e => console.log(e))

//exportando funções
//Get
exports.paginaInicialGet = (req, res) => {
    res.render('index.ejs');
    console.log();
}

