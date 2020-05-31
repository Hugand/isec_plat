import React from 'react'
import '../css/ProfInfo.scss'
import { MdEmail } from "react-icons/md";
import {getSessionCookie, deleteSessionCookie} from '../sessions.js'

class ProfInfo extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            prof: {},
            cadeiras: []
        }
    }
    componentDidMount = (props) => {
        const splitUrl = window.location.toString().split("/")
        const id = splitUrl[splitUrl.length-1]
        fetch("https://apont-plat-api.ugomes.com/profs/get_professor.php?prof_id="+id,{
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
                    this.setState({
                        prof: res.prof,
                        cadeiras: res.cadeiras
                    })
                    
                }
            })
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
                                onClick={() => {window.location = "/cadeira_info/"+cadeira.id}}>
                                <h2>{cadeira.nome}</h2>
                            </div>)}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfInfo