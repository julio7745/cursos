import ValidaCPF from './ValidarCPF.js';

export default class GeraCPF {
    rand(min = 100000000, max = 999999999){
        return String ( Math.floor(Math.random() * (max - min + 1) + min))
    }

    geranovoCPF(){
        
        const cpfSemDigitos = this.rand()

        const validador = new ValidaCPF(cpfSemDigitos)

        const d1 = validador.geraDigito(cpfSemDigitos)
        const d2 = validador.geraDigito(cpfSemDigitos + d1)

        const novoCpf = cpfSemDigitos + d1 + d2
        
        const cpfFormatado = `${novoCpf.slice(0,3)}.${novoCpf.slice(3,6)}.${novoCpf.slice(6,9)}-${novoCpf.slice(-2)}`
        
        return cpfFormatado
        
    }
}