
//Estamos importando o React (ja que usamos JSX) e o Component, já que estamos criando um componente com class
import React, {Component} from "react";

//Estamos importando o Css 
import "./Main.css";

//Estamos importanto os componentes
import Form from './Fomr/Form'
import Lista from "./Lista/Lista";

export default class Main extends Component {

    //Essa é a estrutura para declarar as propriedades do objeto
    state = {
        novaTarefa: '',
        tarefas: [],
        error: null,
        edicao: null
    }

    //Sempre que algo atualiza, chama essa função
    //esta sendo usado para salvar as tarefas no local storage
    //dentro do segundo parametro, temos um objeto com valor passado (anterior) de cada propriedade do objeto
    componentDidUpdate(preveProps, preveState){

        const tarefas = [...this.state.tarefas]

        //retornaremos se a alteração não mudar as tarefas
        //a comparação entre arrays deve ser feita tranformando o conteudo em string,
        //pois como se trata de array, ele iria verificar a posição do conteudo tbm. 
        if (JSON.stringify(tarefas) === JSON.stringify(preveState.tarefas)) return;

        //salva tarefas no estoque do navegador
        localStorage.setItem('tarefas', JSON.stringify(tarefas))
    
    }

    //Sempre que o componente for renderiza vai executar essa função
    //esta sendo usado para carregar as tarefas nd local storage
    componentDidMount(){

        //carrega tarefas do navegador
        const tarefas = JSON.parse(localStorage.getItem('tarefas'))

        //Checa se as tarefas existem, se exitirem, irá envialos para a lista
        if (tarefas === null) return
        this.setState({
            tarefas: tarefas
        }) 
    }

    //Metodo que é chamado quando o form é alterado
    handleChande = (e) => {
        this.setState({
            novaTarefa: e.target.value
        }) 
        //limpa erro
        this.setState({
            error: null
        })
    }

    //Metodo que é chamado quando o form é enviado
    handleSubmit = (e) => {

        //previnimos o envio do formulario
        e.preventDefault();

        //importamos as tarefas (precisamos pegar as tarefas antigas e espalhar na nova variavel pois é passado a referencia do local e não o valor)
        const tarefas = [...this.state.tarefas]

        //importamos a nova tarefa e retiramos os espaços nas pontas
        let {novaTarefa, edicao} = this.state
        novaTarefa = novaTarefa.trim()

        //verifica se a tarefa não esta limpa
        if(this.state.novaTarefa === ""){
            this.setState({
                error: 'A tarefa não pode estar vazia!'
            })
            return
        }

        //verifica se a nova tarefa ja existe
        if(tarefas.includes(novaTarefa) && edicao === null)
        {
            //add erro
            this.setState({
                error: 'Essa tarefa já existe!'
            })

        }else{

            //se for edição, edita, caso contrario adiciona
            if (edicao !== null) {
                tarefas[edicao] = novaTarefa
            }else{
                tarefas.unshift(novaTarefa)
            }

            //devolve o valor, limpa input de texto, e desabilita edição
            this.setState({
                tarefas: tarefas,
                novaTarefa: '',
                edicao: null
            })

        }
    }

    //Metodo que é chamado quando o for apagado
    handleDelete = (e, index) => {
        let tarefas = [...this.state.tarefas]

        //apaga 1 elemento a partir do index 'index'
        tarefas.splice(index, 1)

        //devolve o valor
        this.setState({
            tarefas: tarefas
        })
    }

      //Metodo que é chamado quando o for editado
    handleEdit = (event, index) => {

        let tarefas = [...this.state.tarefas]

            //Envia tarefa a ser editada para o visor e habilita edição do indice 'index'
            this.setState({
            novaTarefa: tarefas[index],
            edicao: index

        })
    }
    
    //render é o retorno do componente, (equivalente ao retorno da função sem class)
    render(){

        return (
            
            //usamos o <> e </> porque o render só pode retornar um unico elemento
            <div className="main">

                <h1>Lista de Tarefas</h1>

                <Form 
                    handleSubmit={this.handleSubmit} 
                    handleChande={this.handleChande} 
                    novaTarefa={this.state.novaTarefa} 
                    error={this.state.error} 
                />

                <Lista
                    tarefas = {this.state.tarefas} 
                    handleEdit = {this.handleEdit}
                    handleDelete = {this.handleDelete}
                />

            </div>
        )
    }
}