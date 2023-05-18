
//importamos mongoose, responsavel pelo banco de dados
const mongoose = require('mongoose')

//importamos mongoose, responsavel por fazer o hash da senha
const bcryptjs = require('bcryptjs')

//Configuramos um novo modelo de pagina no banco de dados
const registerNewUser = new mongoose.Schema({
    email: {type: String, required: true},
    senha: {type: String, required: true}
})

//criamos um novo tipo de pagina as as configurações criadas
const loginModel = mongoose.model('login', registerNewUser)

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
        
        await this.userExist()
        
        if(this.errors.length > 0) return

        this.quebraSenha()
        this.user = await loginModel.create(this.body)
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

    //checa se o usuario ja existe
    async userExist(){
        const exist = await loginModel.findOne({email: this.body.email})
        if(exist){
            this.errors.push('Email ja cadastrado')
        }
    }

    //faz p hash da senha
    quebraSenha(){
        //gera um valor aleatorio
        const salt = bcryptjs.genSaltSync()
        //gera uma senha quebrada unindo a senha e o salt
        return this.body.senha = bcryptjs.hashSync(this.body.senha, salt)
    }
}

module.exports = RegisterUser