import React from 'react'
import '../css/Navbar.scss';
import CadeiraNavbarItem from '../components/CadeiraNavbarItem'
import { FiMenu } from "react-icons/fi";
import { MdClear } from "react-icons/md";
import {getSessionCookie, deleteSessionCookie} from '../sessions.js'

class Navbar extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            display_tabs: {
                y1: false,
                y1s1: false,
                y1s2: false,
                y2: false,
                y2s1: false,
                y2s2: false,
                y3: false,
                y3s1: false,
                y3s2: false,
            },
            cadeiras: {
                y1: {
                    s1: [],
                    s2: [],
                },
                y2: {
                    s1: [],
                    s2: [],
                },
                y3: {
                    s1: [],
                    s2: [],
                },
            },
            profs: [],
            display_menu: false

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
                        this.logout()
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
                        this.logout()
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

    handle_tab = (tab_name) => {
        const disp = this.state.display_tabs
        disp[tab_name] = !disp[tab_name]

        this.setState({
            display_tabs: disp,
        })
    }

    logout = () => {
        deleteSessionCookie()
        window.location = "/login"
    }

    render(){
        return (
            <div id="navbar"
                style={{"height": (this.state.display_menu) ? "calc(100% - 20px)" : "50px"}}>

                <div className="nav-buttons"
                    style={{"display": (this.state.display_menu) ? "block" : "none"}}>

                    <ul className="outer-ul">
                        <li onClick={()=>{window.location="/cadeiras"}}>Cadeiras</li>
                            <ul className="year-ul">
                                <li onClick={() => this.handle_tab('y1')}>1ºano</li>
                                {(this.state.display_tabs.y1) ?
                                    <ul>
                                        <ul className="semester-ul">
                                            <li onClick={() => this.handle_tab('y1s1')}>1º semestre</li>
                                            {(this.state.display_tabs.y1s1) ?
                                            <ul className="inner-ul">
                                                {this.state.cadeiras.y1.s1.map(cadeira => 
                                                    <CadeiraNavbarItem cadeira={cadeira}/>)}
                                            </ul>
                                            : ""}
                                        </ul>
                                        <ul className="semester-ul">
                                            <li onClick={() => this.handle_tab('y1s2')}>2º semestre</li>
                                            {(this.state.display_tabs.y1s2) ?
                                            <ul className="inner-ul">
                                            {this.state.cadeiras.y1.s2.map(cadeira => 
                                                <CadeiraNavbarItem cadeira={cadeira}/>)}
                                            </ul>
                                            : ""}
                                        </ul>
                                    </ul>
                                : ""}
                                
                            </ul>
                            <ul className="year-ul">
                                <li onClick={() => this.handle_tab('y2')}>2ºano</li>
                                {(this.state.display_tabs.y2) &&
                                    <ul>
                                        <ul className="semester-ul">
                                            <li onClick={() => this.handle_tab('y2s1')}>1º semestre</li>
                                                {(this.state.display_tabs.y2s1) ?
                                                    <ul className="inner-ul">
                                                    {this.state.cadeiras.y2.s1.map(cadeira => 
                                                        <CadeiraNavbarItem cadeira={cadeira}/>)}
                                                    </ul>
                                                    : ""}
                                        </ul>
                                        <ul className="semester-ul">
                                            <li onClick={() => this.handle_tab('y2s2')}>2º semestre</li>
                                                {(this.state.display_tabs.y2s2) ?
                                                    <ul className="inner-ul">
                                                    {this.state.cadeiras.y2.s2.map(cadeira =>
                                                        <CadeiraNavbarItem cadeira={cadeira}/>)}
                                                    </ul>
                                                    : ""}
                                        </ul>
                                    </ul>}
                            </ul>
                            <ul className="year-ul">
                                <li onClick={() => this.handle_tab('y3')}>3ºano</li>
                                {(this.state.display_tabs.y3) &&
                                    <ul>
                                        <ul className="semester-ul">
                                            <li onClick={() => this.handle_tab('y3s1')}>1º semestre</li>
                                                {(this.state.display_tabs.y3s1) ?
                                                <ul className="inner-ul">
                                                {this.state.cadeiras.y3.s1.map(cadeira =>
                                                    <CadeiraNavbarItem cadeira={cadeira}/>)}
                                                </ul>
                                                : ""}
                                        </ul>
                                        <ul className="semester-ul">
                                            <li onClick={() => this.handle_tab('y3s2')}>2º semestre</li>
                                                {(this.state.display_tabs.y3s2) ?
                                                <ul className="inner-ul">
                                                {this.state.cadeiras.y3.s2.map(cadeira => 
                                                    <CadeiraNavbarItem cadeira={cadeira}/>)}
                                                </ul>
                                                : ""}
                                        </ul>
                                    </ul>}
                            </ul>
                    </ul>
                    <ul className="outer-ul">
                    <li onClick={() => {window.location = "/profs"}}>Professores</li>
                    <ul className="inner-ul">
                        {this.state.profs.map(prof => 
                            <li onClick={() => {window.location = "/prof_info/"+prof.id}}>
                                {prof.nome}
                                <div className="navbar-underline"></div>
                            </li>)}
                    </ul>
                </ul>
               </div>
               <div className="navbar-separator"></div>
                <label className="navbar-logout" onClick={this.logout}>Logout</label>
                
                <div className="mobile-menu-button" onClick={()=>{
                    const {display_menu} = this.state
                    this.setState({
                        display_menu: !display_menu
                    })
                }}>
                    {(this.state.display_menu ?
                        <MdClear size="20" color="#eeeeeeec"/>
                    :
                        <FiMenu size="20" color="#eeeeeeec"/>
                    )}

                </div>
            </div>
        )
    }
}

export default Navbar