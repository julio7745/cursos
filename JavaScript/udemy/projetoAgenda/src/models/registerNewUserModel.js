
//importamos mongoose, responsavel pelo banco de dados
const mongoose = require('mongoose')

//Configuramos um novo modelo de pagina no banco de dados
const registerNewUser = new mongoose.Schema({
    email: {type: String, required: true},
    senha: {type: String, required: true}
})

//criamos um novo tipo de pagina as as configurações criadas
const newLoginModel = mongoose.model('login', registerNewUser)

//importamos validator, responsavel pela validação do email
const validator = require('validator')

//criamos a classe RegisterUser
class RegisterUser {

    //dados que serão retornados ficam dentro do constructor
    constructor(body){
        this.body = body
        this.errors = []
        this.user = null
    };

    //tenta registrar novo usuario
    async register(){
        this.validaDados()
        if(this.errors.length > 0) return
        try{
            this.user = await newLoginModel.create(this.body)
        }catch(e) {
            console.log(e)
            this.errors.push(e)
        }
    }

    //metodos comuns a todos os usuarios ficam fora do constructor

    //cria metodo de validar dados
    validaDados(){
        //limpa chaves desnecessarias 
        this.cleanData()
        //valida email
        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail is invalid')
        //valida senha
        if(this.body.senha.length !== 8) this.errors.push('A senha precisa ter 8 caracteres')
    }

    //cria metodo de limpar chaves desnecessarias 
    cleanData(){
        //limpa chaves que não são string
        for (const key in this.body){
            this.body[key] = typeof (this.body[key]) !== 'string' ? '' : this.body[key]
        }
        //deixamos apenas as duas chaves necessarias
        this.body = {
            email: this.body.email,
            senha: this.body.senha,
        }
    }
}

module.exports = RegisterUser