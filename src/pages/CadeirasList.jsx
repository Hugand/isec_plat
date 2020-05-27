import React from 'react'
import '../css/CadeirasList.scss'
import CadeiraCard from '../components/CadeiraCard'

class CadeirasList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            cadeiras: {
                y1: {
                    s1: [
                        {
                            nome: "Anal. Matematica 2",
                            prof: "Amrmenio do Matlab"
                        },
                        {
                            nome: "Anal. Matematica 2",
                            prof: "Amrmenio do Matlab"
                        },
                    ],
                    s2: [
                        {
                            nome: "Anal. Matematica 2",
                            prof: "Amrmenio do Matlab"
                        },
                        {
                            nome: "Anal. Matematica 2",
                            prof: "Amrmenio do Matlab"
                        },
                        {
                            nome: "Anal. Matematica 2",
                            prof: "Amrmenio do Matlab"
                        },
                    ]
                }
            }
        }

    }
    render(){
        return (
            <div className="cadeiras-container">
                <div className="cadeiras-list">
                    <div className="cadeiras-year">
                        <h1>1º Ano</h1>

                        <div className="cadeiras-semester semester-1">
                            <h2>1º Semestre</h2>
                            {this.state.cadeiras.y1.s1.map(cadeira => 
                                <CadeiraCard cadeira={cadeira} />)}
                        </div>
                        <div className="cadeiras-semester semester-2">
                            <h2>2º Semestre</h2>
                            {this.state.cadeiras.y1.s2.map(cadeira => 
                                <CadeiraCard cadeira={cadeira} />)}
                        </div>
                    </div>
                    <div className="cadeiras-year">
                        <h1>2º Ano</h1>

                        <div className="cadeiras-semester semester-1">
                            <h2>1º Semestre</h2>
                            {this.state.cadeiras.y1.s1.map(cadeira => 
                                <CadeiraCard cadeira={cadeira} />)}
                        </div>
                        <div className="cadeiras-semester semester-2">
                            <h2>2º Semestre</h2>
                            {this.state.cadeiras.y1.s2.map(cadeira => 
                                <CadeiraCard cadeira={cadeira} />)}
                        </div>
                    </div>
                    <div className="cadeiras-year">
                        <h1>3º Ano</h1>

                        <div className="cadeiras-semester semester-1">
                            <h2>1º Semestre</h2>
                            {this.state.cadeiras.y1.s1.map(cadeira => 
                                <CadeiraCard cadeira={cadeira} />)}
                        </div>
                        <div className="cadeiras-semester semester-2">
                            <h2>2º Semestre</h2>
                            {this.state.cadeiras.y1.s2.map(cadeira => 
                                <CadeiraCard cadeira={cadeira} />)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CadeirasList