import React from 'react'
import '../css/ProfsList.scss'
import {getSessionCookie, deleteSessionCookie} from '../sessions.js'

class ProfsList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            profs: []
        }
    }

    componentDidMount = (props) => {
        fetch("https://apont-plat-api.ugomes.com/profs/get_professores_list.php",{
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
                    console.log(res.profs)

                    this.setState({
                        profs: res.profs
                    })
                }
            })
    }

    render(){
        return (
            <div className="profs-list-container">
                <input type="text" className="txt-field" placeholder="search"/>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.profs.map(prof => 
                                <tr onClick={() => {window.location = "/prof_info/"+prof.id}}>
                                    <td>{prof.nome}</td>
                                    <td>{prof.email}</td>
                                </tr> )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProfsList