

const falaNome = {                                          //
    falaNome() { console.log(this.nome); }                  //
}                                                           //
const falaSobrenome = {                                     //
    falaSobrenome() { console.log(this.sobrenome); }        // criei objetos com metodos 
}                                                           // do lado de fora do objeto principal
const falaNomeCompleto = {                                  // 
    falaNomeCompleto() {                                    //
        console.log(this.nome + ' ' + this.sobrenome );     //
    }                                                       //
}                                                           //


//const pessoaPrototype = {...falaNome, ...falaSobrenome, ...falaNomeCompleto}
const pessoaPrototype = Object.assign( {}, falaNome, falaSobrenome, falaNomeCompleto)
//Criei um __protho__
//Mais de um __protho__ podem usar os mesmos metodos


function criaPessoa(nome, sobrenome) {
    
    //criei um objeto com __protho__ que criei anteriormente
    return Object.create(pessoaPrototype, {    
        
        nome : {
            enumerable: true,
            value: nome
        },

        sobrenome : {
            enumerable: true,
            value: sobrenome
        }

    })
}

const p1 = criaPessoa('Julio', 'Carvalho')
p1.falaNome()
p1.falaSobrenome()
p1.falaNomeCompleto()