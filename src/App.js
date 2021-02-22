import React, { } from 'react';
import './App.css';

import DadosAtividade from "./components/DadosAtividade"

function App() {
  return (
    <div className="App">
       <div className="centro">
          <DadosAtividade tipo="atividade"></DadosAtividade>
       </div>
    </div>
  );
}

export default App;