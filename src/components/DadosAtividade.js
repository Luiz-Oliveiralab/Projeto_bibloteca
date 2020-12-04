import React, {Component} from 'react'

export default class DadosAtividade extends Component{

    constructor(props){
        super (props);

        this.state = {
            atividade: "",
        }
    }



    render () {
        return (
            <div className="dadosatividade">
                <input type="text" onChange={(event)=>{this.setState({atividade:event.target.value})}}></input>
                <h6>Atividade</h6>
            </div>
        )
    }
}