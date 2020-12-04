import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DadosNome from "./components/DadosNome"
import DadosIdade from "./components/DadosIdade"
import DadosAtividade from "./components/DadosAtividade"
import DadosTurma from "./components/DadosTurma"
import DadosCurso from "./components/DadosCurso"

function App() {
  return (
    <div className="App">
       <DadosNome tipo="nome"></DadosNome>
       <DadosIdade tipo="idade"></DadosIdade> 
       <DadosAtividade tipo="atividade"></DadosAtividade>
       <DadosTurma tipo="turma"></DadosTurma>
       <DadosCurso tipo="curso"></DadosCurso>
    </div>
  );
}

export default App;