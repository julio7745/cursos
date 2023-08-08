
//importamos mongoose, responsavel pelo banco de dados
const mongoose = require('mongoose')

//importamos validator, responsavel pela validação do email
const validator = require('validator')

//Configuramos um novo modelo de pagina no banco de dados
const ContatoSchema = new mongoose.Schema({
    user: {type: String, required: true},
    nome: {type: String, required: true},
    sobrenome: {type: String, required: false, default: ''},
    telefone: {type: String, required: false, default: ''},
    email: {type: String, required: false, default: ''}
})

//criamos um novo tipo de pagina para as configurações criadas
const ContatoModel = mongoose.model('contato', ContatoSchema)

//criamos o formato do objeto Contato
function Contato(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
}

//criamos a função register do objeto que recebe o usuario logado 
Contato.prototype.register = async function (user) {

    //validamos os campos do formulário, salvos em this.body
    this.valida()

    //se não ouver erro proseguimos 
    if(this.errors.length > 0) return

    //criamos uma chave dentro de body com o usuario logado, pois o ContatoSchema possui essa chave
    //esse valor serve para determinar quem cadastrou aquele contato 
    this.body.user = user

    //o contato recebe o contato que esta sendo criado no banco de dados 
    try {
        this.contato = await ContatoModel.create(this.body)
    } catch (error) {
        this.errors.push("Erro ao registar contato, entre em contato com o desenvolvedor")
        console.log("Erro ao registar contato em contatomodel.register");
        console.log(error);
    }
    
}

//criamos a função valida que serve ara validar os dados do formulario
Contato.prototype.valida = function () {

    //limpa chaves desnecessarias 
    this.cleanData()

    //valida contato
    if(!this.body.nome) this.errors.push('Você precisa adicionar um nome ao contato')
    if(!this.body.telefone && !this.body.email) this.errors.push('Você precisa adicionar uma forma de contato')
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Este E-mail é invalido')
}

//cria metodo de limpar chaves desnecessarias 
Contato.prototype.cleanData = function() {

    //limpa chaves que não são string
    for (const key in this.body){
        this.body[key] = typeof (this.body[key]) !== 'string' ? '' : this.body[key]
    }

    //deixamos apenas as duas chaves necessarias
    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone,
    }
}

//cria metodo de editar contato que recebe o id do ctt a ser editado
Contato.prototype.edit = async function (id) {

    //validamos os campos do formulário, salvos em this.body
    this.valida()

    //se não ouver erro proseguimos 
    if (this.errors.length > 0) return

    //tenta atualizar os dados do ctt atravez do id
    try {
        const ctt = await ContatoModel.updateOne({_id:id}, this.body,)
    } catch (error) {
        this.errors.push("Erro ao editar contato, entre em contato com o desenvolvedor")
        console.log("Erro ao editar contato em contatomodel.edit");
        console.log(error);
    }
    return
}

//cria metodo de apagar contato que recebe o id do ctt a ser apagado
Contato.prototype.delete = async function(id) {

    //tenta apagar ctt com base no id
    try {
        await ContatoModel.deleteOne({_id: id})
    } catch (error) {
        this.errors.push("Erro ao apagar contato, entre em contato com o desenvolvedor")
        console.log("Erro ao editar contato em contatomodel.delete");
        console.log(error);
    }
    return
}

//estaticos
//cria metodo de buscar ctt por id (usado para exibir os dados na pagina do próprio ctt)
Contato.buscaDadosCtt = async function (id) {

    //tenta buscar e retorna o ctt ou o erro
    try {
        const contato = await ContatoModel.findById(String(id))
        return contato
    } catch (error) {
        this.errors.push("Erro ao procurar contato, entre em contato com o desenvolvedor")
        console.log("Erro ao procurar contato em contatomodel.buscaPorID");
        console.log(error);
        return
    }   
}

//cria metodo de buscar todos ctt com base no usuario (usado para os ctt na inicial)
Contato.buscaTodos = async function (user) {

    //tenta buscar todos os ctts e retorna uma lista com todos eles
    try {
        //const contatos = await ContatoModel.find() // --> Pega todos  
        const contatos = await ContatoModel.find({user: user}).sort({nome: 1}) // --> Apenas aqueles com email juliocarvalho5998, e bota em ordem decrescente
        return contatos
    } catch (error) {
        this.errors.push("Erro ao procurar contatos, entre em contato com o desenvolvedor")
        console.log("Erro ao procurar contatos em contatomodel.buscaTodos");
        console.log(error);
        return
    }   
}

//exporta o modelo
module.exports = Contato