import React, {Component} from 'react'

export default class DadosCurso extends Component{

    constructor(props){
        super (props);

        this.state = {
            curso: "",
        }
    }



    render () {
        return (
            <div className="dadoscurso">
                <input type="text" onChange={(event)=>{this.setState({curso:event.target.value})}}></input>
                <h6>Curso</h6>
            </div>
        )
    }
}