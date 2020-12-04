import React, {Component} from 'react'

export default class DadosTurma extends Component{

    constructor(props){
        super (props);

        this.state = {
            turma: "",
        }
    }



    render () {
        return (
            <div className="dadosturma">
                <input type="text" onChange={(event)=>{this.setState({turma:event.target.value})}}></input>
                <h6>Turma</h6>
            </div>
        )
    }
}