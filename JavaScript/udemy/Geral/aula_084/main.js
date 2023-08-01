class ValidarCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g, ''),
            writable: false,
            configurable: false,
            //enumerable: false
        });
    }
    valida(){
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        
        const novoCpf = this.geraNovoCpf()
        if (this.cpfLimpo === novoCpf) return true
        return false
    }
    geraNovoCpf(){

        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digito1 = this.geraDigito(cpfSemDigitos)
        const digito2 = this.geraDigito(cpfSemDigitos + digito1)
        const novoCpf = cpfSemDigitos+digito1+digito2
        return novoCpf
    }
    geraDigito(cpfSemDigitos){
        let total = 0
        let contador = cpfSemDigitos.length + 1
        for(let i of cpfSemDigitos){
            total += contador * Number(i)
            contador --
        }

        total = 11 - (total % 11)
        return total > 9 ? '0' : total
    }

}

const validaCPF = new ValidarCPF('070.987.720-03') 
console.log(validaCPF.valida());