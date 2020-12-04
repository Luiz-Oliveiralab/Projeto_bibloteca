import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DadosNome from "./components/DadosNome"
import DadosIdade from "./components/DadosIdade"

function App() {
  return (
    <div className="App">
       <DadosNome tipo="nome"></DadosNome>
       <DadosIdade tipo="idade"></DadosIdade>
    </div>
  );
}

export default App;