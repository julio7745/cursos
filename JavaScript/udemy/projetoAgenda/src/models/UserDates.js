
//importamos mongoose, responsavel pelo banco de dados
const mongoose = require('mongoose')

//importamos bcryptjs, responsavel por fazer o hash da senha
const bcryptjs = require('bcryptjs')

//Configuramos um novo modelo de pagina no banco de dados
const User = new mongoose.Schema({
    email: {type: String, required: true},
    senha: {type: String, required: true}
})

//criamos um novo tipo de pagina as as configurações criadas
const loginModel = mongoose.model('login', User)

//importamos validator, responsavel pela validação do email
const validator = require('validator')

//criamos a classe RegisterUser
class UserDates {

    //dados que serão retornados ficam dentro do constructor
    constructor(body){
        this.body = body
        this.errors = []
        this.user = null
    };

    //tenta registrar novo usuario
    async register(){

        //valida os dados do formulario
        this.validaDados()
        if(this.errors.length > 0) return
        
        //verifica se o usuario exite
        await this.userExist()
        if(this.errors.length > 0) return

        //quebra a senha para não ficar exposta no banco de dados
        this.quebraSenha()

        //tenta criar usuario
        try {
            this.user = await loginModel.create(this.body)
        } catch (error) {
            this.errors.push("Erro ao criar usuário, entre em contato com o desenvolvedor")
            console.log("Erro ao criar usuário em userDates.register()");
            console.log(error);
            return
        }
    }

    //tenta logar usuario
    async verificalogin(){

        //valida os dados do formulario
        this.validaDados()
        if(this.errors.length > 0) return
        
        //tenta achar usuario com email compativel ao digitado
        try {
            this.user = await loginModel.findOne({email: this.body.email})    
        } catch (error) {
            this.errors.push("Erro ao logar usuário, entre em contato com o desenvolvedor")
            console.log("Erro ao procurar usuario no banco de dados em userDates.login()");
            console.log(error);
            return
        }
        
        //se não retornar nd, o email esta incorreto
        if(!this.user ) {
            this.errors.push('E-mail incorreto')
            return
        }

        //se o email existir, verifica se a senha digitada é igual a que foi quebrada anteriormente 
        if(!bcryptjs.compareSync(this.body.senha,  this.user.senha)) {
            this.errors.push('Senha incorreta')
            return
        }        
    }

    //metodos comuns a todos os usuarios ficam fora do constructor

    //cria metodo de validar dados
    validaDados(){

        //limpa chaves desnecessarias 
        this.cleanData()

        //valida email
        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail invalido')

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

        //tenta procurar um usuario semelhante
        try {
            if(await loginModel.findOne({email: this.body.email})){
                this.errors.push('Email ja cadastrado')
            }
        } catch (error) {
            this.errors.push("Erro ao cadastrar usuário, entre em contato com o desenvolvedor")
            console.log("Erro ao verificar se o usuario ja existe no banco de dados em userDates.userExist()");
            console.log(error);
        } 
    }

    //faz o hash da senha
    quebraSenha(){

        //gera um valor aleatorio
        const salt = bcryptjs.genSaltSync()

        //gera uma senha quebrada unindo a senha e o salt
        return this.body.senha = bcryptjs.hashSync(this.body.senha, salt)
    }
}

//exporta extrutura
module.exports = UserDates