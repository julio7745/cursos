/*
function criaPessoa(nome, sobrenome) {
    return{
        nome, 
        sobrenome,
        get falaNome() {
            console.log(this.nome + ' ' + this.sobrenome)
        }
    }
}
const p1 = criaPessoa('Julio', 'Carvalho');
p1.falaNome
*/

function criaPessoa(nome, sobrenome) {
    return{
        nome, 
        sobrenome,
        get nomeCompleto() {
            console.log(this.nome + ' ' + this.sobrenome)
        },
        set nomeCompleto(string) {
            string = string.split(' ');
            [this.nome, ...this.sobrenome] = string
            this.sobrenome = this.sobrenome.join(' ')
        }
    }
}

const p1 = criaPessoa('Julio', 'Carvalho');
p1.nomeCompleto
p1.nomeCompleto = 'renato moreira junior'
p1.nomeCompleto