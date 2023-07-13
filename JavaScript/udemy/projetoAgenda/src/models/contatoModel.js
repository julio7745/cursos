
//importamos mongoose, responsavel pelo banco de dados
const mongoose = require('mongoose')

//importamos validator, responsavel pela validação do email
const validator = require('validator')

//Configuramos um novo modelo de pagina no banco de dados
const ContatoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: false, default: ''},
    telefone: {type: String, required: false, default: ''},
    email: {type: String, required: false, default: ''},
    criadoEm: {type: Date, default: Date.now}
})

//criamos um novo tipo de pagina para as configurações criadas
const ContatoModel = mongoose.model('contato', ContatoSchema)

function Contato(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
}
Contato.prototype.register = async function () {
    this.valida()
    if(this.errors.length > 0) return
    this.contato = await ContatoModel.create(this.body)
}
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

Contato.prototype.edit = async function (id) {
    this.valida()
    if (this.errors.length > 0) return
    try {
        await ContatoModel.updateOne({_id:id}, this.body, {new: true}) //ultimo objeto faz com que o retornado seja o atualizado e não o antigo
        this.contato = await ContatoModel.findById(String(id))
    } catch (error) {
        this.errors.push("Erro ao editar contato, entre em contato com o desenvolvedor")
        console.log("Erro ao editar contato em contatomodel.edit");
        console.log(error);
    }
    return
}

Contato.prototype.delete = async function(id) {
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
Contato.buscaPorID = async function (id) {
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

Contato.buscaTodos = async function (id) {
    try {
        const contatos = await ContatoModel.find().sort({criadoEm: -1}) // --> procura todos e bota em ordem decrescente
        //const contato = await ContatoModel.find({email: 'juliocarvalho5998@gmail.com'}) // --> Apenas aqueles com email juliocarvalho5998
        return contatos
    } catch (error) {
        this.errors.push("Erro ao procurar contatos, entre em contato com o desenvolvedor")
        console.log("Erro ao procurar contatos em contatomodel.buscaTodos");
        console.log(error);
        return
    }   
}



module.exports = Contato