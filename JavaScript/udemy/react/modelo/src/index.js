//Este é o arquivo que retorna o JSX (HTML) do index.html

//Importamos pacotes necessarios para utilizar o JSX
import React from 'react';
import ReactDOM from 'react-dom/client';

//Importamos a pagina que será renderizada no root
import AppPage from './App.js';

//Estamos selecionando o objeto com id root, do index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

//Estamos renderizando a AppPage importada 
root.render( <AppPage /> );

