const newTarefa = document.getElementById("tarefa")
const tarefas = document.getElementById("tarefas")
const form = document.getElementsByTagName("form")[0]

form.onclick = (e) => {
    
    e.preventDefault();

    if(!newTarefa.value) return;
        
    let tarefa = criatarefa() 
    tarefas.appendChild(tarefa)
    salvatarefa();
    newTarefa.value = ""
    
}

function criatarefa() {
    const tarefa = document.createElement('li')
    tarefa.innerHTML = newTarefa.value

    tarefa.innerHTML += " "

    let bt = criaBT()
    tarefa.appendChild(bt)

    tarefa.setAttribute('class', 'tarefa')

    return tarefa
}

function criaBT() {
    const btApagar = document.createElement('button')
    btApagar.innerText = 'Apagar'
    btApagar.setAttribute('class', 'apagar')
    return btApagar
}

document.addEventListener('click', function(e){
    const elemento = e.target

    if (elemento.classList.contains('apagar')) {
        elemento.parentElement.remove()
        salvatarefa();
    }
})

function salvatarefa() {

    const itensDeTarefa = document.querySelectorAll("li.tarefa")

    let listaDeTarefas = []

    for (let tarefa = 0; tarefa < itensDeTarefa.length; tarefa++){

        let tarefaTexto = itensDeTarefa[tarefa].innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        
        listaDeTarefas.push(tarefaTexto)

    }

    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function carregaTarefas() {

    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for (let i = 0; i < listaDeTarefas.length; i++) {
        
        newTarefa.value = listaDeTarefas[i]

        let tarefa = criatarefa() 
        const tarefas = document.getElementById("tarefas")
        tarefas.appendChild(tarefa)
        salvatarefa();
        newTarefa.value = ""
    }

}

carregaTarefas();