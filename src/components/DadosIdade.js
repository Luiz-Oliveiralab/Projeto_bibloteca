import React, {Component} from 'react'

export default class DadosIdade extends Component{

    constructor(props){
        super (props);

        this.state = {
            idade: "",
        }
    }



    render () {
        return (
            <div className="dadosidade">
                <input type="text" onChange={(event)=>{this.setState({idade:event.target.value})}}></input>
                <h6>Idade</h6>
            </div>
        )
    }
}