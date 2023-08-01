//Estamos importando o React (ja que usamos JSX) e o Component, já que estamos criando um componente com class
import React from "react";

//Estamos importando o Css 
import "./Lista.css";

//Importamos icones utilizados na lista
import {FaWindowClose, FaEdit} from 'react-icons/fa'

export default function Lista(props) {

    const {tarefas, handleEdit, handleDelete} = props
    
    //retorno do componente
    return (

        <ul className="tarefas">
            {   
                //usamos o map, pois assim vai retornar cada elemento de tarefas
                //Enviamos a tarefa o indice da respectiva
                tarefas.map((tarefa, index) => ( 

                    //Retornamos um item de lista com a key (obrigatório smepre que usamos o map (tipo um id))
                    <li key={index}>

                        {tarefa /*Aqui estamos enviando a propria tarefa*/}
                        
                        {/*Estamos enviando o indice da tarefa que veio do map como paramentro p/ apagar e editar */}
                        <span className="icocontainer">
                            <FaEdit onClick={(e) => handleEdit(e, index)} className="ico edit"/> 
                            <FaWindowClose onClick={(e) => handleDelete(e, index)} className="ico delete"/>
                        </span>
                        
                    </li>
         
                ))
            }
        </ul>
    );
}