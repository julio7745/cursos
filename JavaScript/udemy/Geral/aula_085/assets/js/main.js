class ValidaFomrulario{
    constructor(){
        this.formulario = document.querySelector('.form')
        this.eventos();
    }

    eventos(){
       this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
            const campos = this.confereCampos();
            const senhas = this.confereSenhas()

            campos && senhas ? this.formulario.submit(): {}
        })
    }
    handleSubmit(e){
        e.preventDefault()
    }
    confereCampos(){
        let valid = true
        const erros =  this.formulario.getElementsByClassName('erro')
        const quantidadeDeErros = erros.length;
        for (let index = 0; index < quantidadeDeErros; index++) {
            erros[0].remove()
        }
        for(let campo of this.formulario.querySelectorAll('input')){
            if(!campo.value && !campo.classList.contains('user') && !campo.classList.contains('senha')){
                const label = campo.previousElementSibling.innerHTML
                this.criaErro(campo, `O campo "${label}" não pode estar vazio`)
                valid = false
            }

            if (campo.classList.contains('cpf')){
                valid = this.validaCPF(campo, valid)
            }

            if (campo.classList.contains('user')){
                valid = this.validaUser(campo, valid)
            }
        }
        return valid
    }
    validaCPF(campo, valid){
        const validaCPF = new ValidarCPF(campo.value) 
        if (!validaCPF.valida()) {
            this.criaErro(campo, "Este CPF não é valido")
            valid = false
        }
        return valid
    }
    validaUser(campo, valid){
        const user = campo.value 
        if(user.length >= 12 || user.length <= 3 ){
            this.criaErro(campo, 'O campo "usuario" deve estar entre 3 e 12 caracteres')
            return false
        }
        if(!user.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'O campo "usuario" só pode conter letras e/ou numeros')
            return false
        }
        return valid
    }
    criaErro(campo, msg){
       const div = document.createElement('div')
       div.innerHTML = msg
       div.classList.add('erro')

       campo.insertAdjacentElement('afterend', div)
    }
    confereSenhas(){

        let valid = true
        const senha = document.getElementById('Senha')
        const rsenha = document.getElementById('Senha2')

        if (senha.value !== rsenha.value){
            this.criaErro(senha, 'Os campos "Senha" e "Repetir Senha" precisam ser iguais')
            this.criaErro(rsenha, 'Os campos "Senha" e "Repetir Senha" precisam ser iguais')
            return false
        }

        if(senha.value.length > 12 || senha.value.length < 6 ){
            this.criaErro(senha, 'O campo "Senha" deve estar entre 6 e 12 caracteres')
            valid = false
        }
        if(rsenha.value.length > 12 || rsenha.value.length < 6 ){
            this.criaErro(rsenha, 'O campo "Repetir Senha" deve estar entre 6 e 12 caracteres')
            valid = false
        }

        return valid
    }

}

const validaFomrulario = new ValidaFomrulario()