//Estamos importando o React (ja que usamos JSX) e o Component, já que estamos criando um componente com class
import React from "react";

//Estamos importando o Css 
import "./Form.css";

//Estamos Importando icone utilizado no fomrulario
import {MdAssignmentAdd} from 'react-icons/md'

export default function Form(props) {

    const {handleSubmit, handleChande, novaTarefa, error} = props
    
    //retorno do componente
    return (
        <form className="form" onSubmit={handleSubmit} >
            <input
                onChange={ handleChande }
                type="text"
                value={ novaTarefa }
            />
            <button type="submit"> <MdAssignmentAdd className="ico save"/> </button>
            { error ? <div className="alert" >{ error }</div> : <></> }
        </form>
    );
}