import React, { Component } from 'react'
import './DadosAtividade.css'
import logo from './logo-senai.png'

export default class DadosAtividade extends Component {

    constructor(props) {
        super(props);

        this.state = {
            atividade: "",
            nome: "Nome",
            idade: "Idade",
            data: "02/02/02",
            hora: "00h00",
            curso: "Curso",
            turma: "Turma",
            numero: "Numero",

            // Mexer aqui para mudar os dados.
        }
    }

    render() {
        return (
            <div className="dadosatividade">
                <div className='linha'>
                    <div className='atividade'>
                        <input type="text" onChange={(event) => { this.setState({ atividade: event.target.value }) }}></input>
                        <h6>Atividade</h6>
                    </div>
                    <img src={logo} width='300px' height='50px'></img>
                </div>
                <div className='linha'>
                    <h2>{this.state.nome}</h2>
                    <h2>{this.state.idade}</h2>
                </div>
                <div className='linha'>
                    <h2>{this.state.curso}</h2>
                    <h2>{this.state.turma}</h2>
                </div>
                <div className='linha'>
                    <h2>{this.state.numero}</h2>
                    <h2>{this.state.data} e {this.state.hora}</h2>
                </div>
            </div>
        )
    }
}