import React from 'react'
import '../css/ProfInfo.scss'
import { MdEmail } from "react-icons/md";

class ProfInfo extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            prof: {
                    nome: "Armeniozao",
                    email: "armenio@isec.pt"
                },
            cadeiras: [
                {
                    nome: "Analise Mat 2",
                    id: "12"
                },
                {
                    nome: "Analise Mat 2",
                    id: "12"
                },
            ]
        }
    }

    render(){
        return (
            <div className="prof-info-container">
                <div className="flex-container">
                    <div className="prof-container">
                        <h1>Professor</h1>
                        <h3>{this.state.prof.nome}</h3>
                        <div className="email-row">
                            <MdEmail size="20" color="#727272" />
                            <label> {this.state.prof.email}</label>
                        </div>
                    </div>

                    <h1>Cadeiras lecionadas</h1>
                    <div className="cadeiras-container">
                        {this.state.cadeiras.map(cadeira =>
                            <div className="cadeira-card"
                                onClick={() => {window.location = "/cadeira_info"}}>
                                <h2>{cadeira.nome}</h2>
                            </div>)}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfInfo