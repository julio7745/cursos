const resultado = document.querySelector('#res')
const bGerarSenha = document.querySelector('button')

bGerarSenha.addEventListener('click', (e)=>{

    e.preventDefault()

    let quantidade = document.querySelector('#quantidade')
    if (quantidade.value > 100) {
        quantidade.value = 100
    }
    quantidade = document.querySelector('#quantidade').value
    const numeros = document.querySelector('#numeros').checked
    const maiusculas = document.querySelector('#letrasMaiusculas').checked
    const minusculas = document.querySelector('#letrasMinusculas').checked

    const senha = criadorDeSenha()

    let novaSenha = senha.CriaSenha(quantidade, numeros, maiusculas, minusculas) 

    if(novaSenha === 'erro'){
        novaSenha = 'Por favor, selecione pelo menos uma opção!'
    }

    resultado.innerHTML = novaSenha
})
 
function criadorDeSenha(){
    return{
        CriaSenha(quantidade, numeros, maiusculas, minusculas){
            let senha = ''
            for(let i=0; i < quantidade; i++){
                const d = this.criaDigito(numeros, maiusculas, minusculas)
                if (d === 'erro') {
                    return d
                }
                senha += d
            }
            return senha
        }, 
        criaDigito(numeros, maiusculas, minusculas){
            if (numeros == true) {
                if (maiusculas == true) {
                    if ( minusculas == true) {
                        
                        const numero = this.geraNumero(0, 61)
                        if(numero < 10){
                            return String(numero)
                        }else if(numero < 36){
                            return this.retornaMinuscula(numero)
                        }else{
                            return this.retornaMaiuscula(numero)
                        }

                    }else{

                        let numero = this.geraNumero(0, 61)
                        while (numero > 9 && numero < 36) numero = this.geraNumero(0, 61)
                        if(numero < 10){
                            return numero
                        }else{
                            return this.retornaMaiuscula(numero)
                        }

                    }
                }else{
                    if ( minusculas == true) {
                        
                        const numero = this.geraNumero(0, 35)
                        if(numero < 10){
                            return numero
                        }else {
                            return this.retornaMinuscula(numero)
                        }

                    }else{
                        
                        const numero = this.geraNumero(0, 9)
                        return numero

                    }
                }
            }else{
                if (maiusculas == true) {
                    if ( minusculas == true) {

                        const numero = this.geraNumero(10, 61)
                        if (numero < 36){
                            return this.retornaMinuscula(numero)
                        }else{
                            return this.retornaMaiuscula(numero)
                        }

                    }else{

                        const numero = this.geraNumero(36, 61)
                        return this.retornaMaiuscula(numero)

                    }
                }else{
                    if ( minusculas == true) {

                        const numero = this.geraNumero(10, 35)
                        console.log(numero);
                        return this.retornaMinuscula(numero)

                    }else{

                        return 'erro'

                    }
                }
            }
        },
        geraNumero(min, max){
            const n = Math.floor(Number((Math.random()*( max - min + 1) + min)))
            return n
        },
        retornaMinuscula(numero){
            switch (numero){
                case 10: return 'a'
                case 11: return 'b'
                case 12: return 'c'
                case 13: return 'd'
                case 14: return 'e'
                case 15: return 'f'
                case 16: return 'g'
                case 17: return 'h'
                case 18: return 'i'
                case 19: return 'j'
                case 20: return 'k'
                case 21: return 'l'
                case 22: return 'm'
                case 23: return 'n'
                case 24: return 'o'
                case 25: return 'p'
                case 26: return 'q'
                case 27: return 'r'
                case 28: return 's'
                case 29: return 't'
                case 30: return 'u'
                case 31: return 'v'
                case 32: return 'w'
                case 33: return 'x'
                case 34: return 'y'
                case 35: return 'z'
            }
        },
        retornaMaiuscula(numero){
            switch (numero){
                case 36: return 'A'
                case 37: return 'B'
                case 38: return 'C'
                case 39: return 'D'
                case 40: return 'E'
                case 41: return 'F'
                case 42: return 'G'
                case 43: return 'H'
                case 44: return 'I'
                case 45: return 'J'
                case 46: return 'K'
                case 47: return 'L'
                case 48: return 'M'
                case 49: return 'N'
                case 50: return 'O'
                case 51: return 'P'
                case 52: return 'Q'
                case 53: return 'R'
                case 54: return 'S'
                case 55: return 'T'
                case 56: return 'U'
                case 57: return 'V'
                case 58: return 'W'
                case 59: return 'X'
                case 60: return 'Y'
                case 61: return 'Z'
                default: return '0'
            }
        }
    }
}