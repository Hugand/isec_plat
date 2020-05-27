import React from 'react'
import '../css/ProfsList.scss'

class ProfsList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            profs: [
                {
                    nome: "Armeniozao",
                    email: "armenio@isec.pt"
                },
                {
                    nome: "Ricardao Ferraz",
                    email: "ricado_economista@isec.pt"
                },
                {
                    nome: "Armeniozao",
                    email: "armenio@isec.pt"
                },
                {
                    nome: "Armeniozao",
                    email: "armenio@isec.pt"
                },
            ]
        }
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
                                <tr onClick={() => {window.location = "/prof_info"}}>
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