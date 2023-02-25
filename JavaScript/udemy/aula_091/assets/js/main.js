fetch('pessoas.json')
 .then(resposta => resposta.json())
 .then(pessoas => {
    const res = document.getElementById('res')
    const table = document.createElement('table')

    for(pessoa of pessoas){
        const tr = document.createElement('tr')

        let td = document.createElement('td')
        td.innerHTML += "Nome: " + pessoa.nome
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = "Idade: " + pessoa.idade
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = "Empresa: " + pessoa.empresa
        tr.appendChild(td)

        table.appendChild(tr)
    }
    res.appendChild(table)
 })