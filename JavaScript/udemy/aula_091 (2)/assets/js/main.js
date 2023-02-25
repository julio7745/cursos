fetch('pessoas.json')
 .then(resposta => resposta.json())
 .then(pessoas => {
    const res = document.getElementById('res')
    const table = document.createElement('table')

    for(pessoa of pessoas){
        const tr = document.createElement('tr')

       for(i of pessoa){
        const td = document.createElement('td')
        td.innerHTML = i
        tr.appendChild(td)
       }

        table.appendChild(tr)
    }
    res.appendChild(table)
 })