function meuEscopo() {

    const form = document.getElementById('form');

    const pessoas = []

    form.onsubmit = function (evento) {
        
        evento.preventDefault();
        
        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        const resultado = document.getElementById('resultado') 
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} pesa ${peso.value} e mede ${altura.value}. </p>`

        /*pessoas.push({
            nome: nome.value, sobrenome: sobrenome.value, peso: peso.value, altura: altura.value
        });*/

        console.log(pessoas);
    };

}
meuEscopo();