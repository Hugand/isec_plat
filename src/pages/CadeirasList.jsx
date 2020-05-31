import React from 'react'
import '../css/CadeirasList.scss'
import CadeiraCard from '../components/CadeiraCard'
import {getSessionCookie, deleteSessionCookie} from '../sessions.js'

class CadeirasList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            cadeiras: null
        }
    }

    componentDidMount = (props) => {
        fetch("https://apont-plat-api.ugomes.com/cadeiras/query_cadeira_list.php",{
                headers: {
                    // "Content-type": "application/json",
                    "x-access-token": getSessionCookie()
                }
            })
            .then(res => {

                switch(res.status){
                    case 200:
                        return res.json()
                    case 403:
                    case 401:
                        deleteSessionCookie()
                        window.location = "/login"
                        break;
                    case 500:
                        window.location = "/500_error"
                }
            })
            .then(res => {
                if(res){
                    console.log(res.cadeiras)
                    this.setState({
                        cadeiras: res.cadeiras
                    })
                }
            })
    }

    render(){
        return (
            <div className="cadeiras-container">
                {(this.state.cadeiras !== null) &&
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
                                {this.state.cadeiras.y2.s1.map(cadeira => 
                                    <CadeiraCard cadeira={cadeira} />)}
                            </div>
                            <div className="cadeiras-semester semester-2">
                                <h2>2º Semestre</h2>
                                {this.state.cadeiras.y2.s2.map(cadeira => 
                                    <CadeiraCard cadeira={cadeira} />)}
                            </div>
                        </div>
                        <div className="cadeiras-year">
                            <h1>3º Ano</h1>

                            <div className="cadeiras-semester semester-1">
                                <h2>1º Semestre</h2>
                                {this.state.cadeiras.y3.s1.map(cadeira => 
                                    <CadeiraCard cadeira={cadeira} />)}
                            </div>
                            <div className="cadeiras-semester semester-2">
                                <h2>2º Semestre</h2>
                                {this.state.cadeiras.y3.s2.map(cadeira => 
                                    <CadeiraCard cadeira={cadeira} />)}
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default CadeirasList