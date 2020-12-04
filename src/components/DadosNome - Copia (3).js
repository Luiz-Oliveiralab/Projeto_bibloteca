import React, {Component} from 'react'

export default class Dados extends Component{

    constructor(props){
        super (props);

        this.state = {
            nome: "",
        }
    }



    render () {
        return (
            <div className="dadosnome">
                <input type="text" onChange={(event)=>{this.setState({nome:event.target.value})}}></input>
                <h6>Nome</h6>
            </div>
        )
    }
}