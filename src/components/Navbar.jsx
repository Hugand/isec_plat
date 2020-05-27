import React from 'react'
import '../css/Navbar.scss';
import CadeiraNavbarItem from '../components/CadeiraNavbarItem'
import { FiMenu } from "react-icons/fi";
import { MdClear } from "react-icons/md";

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
                ano_1: {
                    semestre_1: [
                        {
                            id: "diow1jdio1",
                            nome: "Cadeira 1"
                        },
                        {
                            id: "chs8hc9a9a",
                            nome: "Cadeira 2"
                        },
                    ],
                    semestre_2: [
                        {
                            id: "diow1jdio1",
                            nome: "Cadeira 4"
                        },
                        {
                            id: "chs8hc9a9a",
                            nome: "Cadeira 5"
                        }
                    ],
                },
                ano_2: {
                    semestre_1: [],
                    semestre_2: [],
                },
                ano_3: {
                    semestre_1: [],
                    semestre_2: [],
                },
            },
            profs: [
                {
                    id: "2ediow1jdio1",
                    nome: "Professor 1"
                },
                {
                    id: "2echs8hc9a9a",
                    nome: "Professor 2"
                },
                {
                    id: "vfdse28fuc9s",
                    nome: "Professor 3"
                },
                {
                    id: "dioji21s0c9",
                    nome: "Professor 4"
                },
            ],
            display_menu: false

        }

    }

    handle_tab = (tab_name) => {
        const disp = this.state.display_tabs
        disp[tab_name] = !disp[tab_name]

        this.setState({
            display_tabs: disp,
        })
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
                                                {this.state.cadeiras.ano_1.semestre_1.map(cadeira => 
                                                    <CadeiraNavbarItem cadeira={cadeira}/>)}
                                            </ul>
                                            : ""}
                                        </ul>
                                        <ul className="semester-ul">
                                            <li onClick={() => this.handle_tab('y1s2')}>2º semestre</li>
                                            {(this.state.display_tabs.y1s2) ?
                                            <ul className="inner-ul">
                                            {this.state.cadeiras.ano_1.semestre_2.map(cadeira => 
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
                                                    {this.state.cadeiras.ano_2.semestre_1.map(cadeira => 
                                                        <CadeiraNavbarItem cadeira={cadeira}/>)}
                                                    </ul>
                                                    : ""}
                                        </ul>
                                        <ul className="semester-ul">
                                            <li onClick={() => this.handle_tab('y2s2')}>2º semestre</li>
                                                {(this.state.display_tabs.y2s2) ?
                                                    <ul className="inner-ul">
                                                    {this.state.cadeiras.ano_2.semestre_2.map(cadeira =>
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
                                                {this.state.cadeiras.ano_3.semestre_1.map(cadeira =>
                                                    <CadeiraNavbarItem cadeira={cadeira}/>)}
                                                </ul>
                                                : ""}
                                        </ul>
                                        <ul className="semester-ul">
                                            <li onClick={() => this.handle_tab('y3s2')}>2º semestre</li>
                                                {(this.state.display_tabs.y3s2) ?
                                                <ul className="inner-ul">
                                                {this.state.cadeiras.ano_3.semestre_2.map(cadeira => 
                                                    <CadeiraNavbarItem cadeira={cadeira}/>)}
                                                </ul>
                                                : ""}
                                        </ul>
                                    </ul>}
                            </ul>
                    </ul>
                    <ul className="outer-ul">
                    <li onClick={() => {window.location = "profs"}}>Professores</li>
                    <ul className="inner-ul">
                        {this.state.profs.map(prof => 
                            <li onClick={() => {window.location = "/prof_info"}}>
                                {prof.nome}
                                <div className="navbar-underline"></div>
                            </li>)}
                    </ul>
                </ul>
                </div>

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