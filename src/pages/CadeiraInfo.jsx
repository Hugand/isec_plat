import React from 'react'
import '../css/CadeiraInfo.scss'
import '../css/Calendar.scss'
import Calendar from '../components/Calendar'
import { MdEmail } from "react-icons/md";

class CadeiraInfo extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            cadeira: {
                nome: "Análise Matemática 2",
                metodos_avaliacao: [
                    {
                        peso: "20%",
                        nome: "Teste 1"
                    },
                    {
                        peso: "80%",
                        nome: "Exame"
                    },
                ]
            },
            professor: {
                nome: "Arménio do Matlab",
                email: "armenio_matlab@isec.pt"
            },
            calendarData: {
                '11/04/2020': {
                    nome: "TP1",
                    tipo: "Trabalho"
                },
                '02/04/2020': {
                    nome: "TP2",
                    tipo: "Trabalho"
                },
                '17/04/2020': {
                    nome: "Exame Época Normal",
                    tipo: "Exame"
                },
            },
            links_aulas: {
                t: [
                    {
                        turma: "T1",
                        link: "https://videoconf-colibri.com/8dh90dc/da0sdjqd"
                    },
                    {
                        turma: "T2",
                        link: "https://videoconf-colibri.com/8dh90dc/da0sdjqd"
                    },
                    {
                        turma: "T3",
                        link: "https://videoconf-colibri.com/8dh90dc/da0sdjqd"
                    },
                ],
                p: [
                    {
                        turma: "P1",
                        link: "https://videoconf-colibri.com/8dh90dc/da0sdjqd"
                    },
                    {
                        turma: "P2",
                        link: "https://videoconf-colibri.com/8dh90dc/da0sdjqd"
                    },
                    {
                        turma: "P3",
                        link: "https://videoconf-colibri.com/8dh90dc/da0sdjqd"
                    },
                ]
            },
            links_videos: [
                {
                    assunto: "Equacoes diferenciais de ordem 1",
                    date: "20/05/2020",
                    link: "https://videoconf-colibri.com/8dh90dc/da0sdjqd"
                },
                {
                    assunto: "Equacoes diferenciais de ordem 2",
                    date: "20/05/2020",
                    link: "https://videoconf-colibri.com/8dh90dc/da0sdjqd"
                },
                {
                    assunto: "Coordenadas polares",
                    date: "20/05/2020",
                    link: "https://videoconf-colibri.com/8dh90dc/da0sdjqd"
                },
                {
                    assunto: "Equacoes diferenciais de ordem 1",
                    date: "20/05/2020",
                    link: "https://videoconf-colibri.com/8dh90dc/da0sdjqd"
                },
                {
                    assunto: "Equacoes diferenciais de ordem 2",
                    date: "20/05/2020",
                    link: "https://videoconf-colibri.com/8dh90dc/da0sdjqd"
                },
                {
                    assunto: "Coordenadas polares",
                    date: "20/05/2020",
                    link: "https://videoconf-colibri.com/8dh90dc/da0sdjqd"
                },
            ],
            links_apontamentos: [
                {
                    assunto: "Equacoes diferenciais de ordem 1",
                    date: "20/05/2020",
                    link: "https://videoconf-colibri.com/8dh90dc/da0sdjqd"
                },
                {
                    assunto: "Equacoes diferenciais de ordem 2",
                    date: "20/05/2020",
                    link: "https://videoconf-colibri.com/8dh90dc/da0sdjqd"
                },
                {
                    assunto: "Coordenadas polares",
                    date: "20/05/2020",
                    link: "https://videoconf-colibri.com/8dh90dc/da0sdjqd"
                },
            ]
        }

    }

    render(){
        return (
            <div className="outter-container">

                <div className="info-container">
                    <div className="info-card">
                        <div className="cadeira">
                            <h1>{this.state.cadeira.nome}</h1>
                            <label>Métodos de avaliação:</label>
                            <ul>
                                {this.state.cadeira.metodos_avaliacao.map(avaliacao =>
                                    <li>{avaliacao.peso} - {avaliacao.nome}</li>)}
                            </ul>
                        </div>
                        <div className="divider"></div>
                        <div className="prof">
                            <h1>Professor</h1>
                            <h3>{this.state.professor.nome}</h3>

                            <div className="email-row">
                                <MdEmail size="20" color="#727272" />
                                <label> {this.state.professor.email}</label>
                            </div>
                        </div>
                    </div>

                    <div className="links-aulas-container">
                        <h1>Links para aulas</h1>

                        <div className="links-container">
                            <h2>Teóricas</h2>
                            <ul>
                                {this.state.links_aulas.t.map(aula =>
                                    <li>
                                        <label>{aula.turma}</label>
                                        <a href="">{aula.link}</a>
                                    </li>
                                )}
                            </ul>
                        </div>

                        <div className="links-container">
                            <h2>Práticas</h2>
                            <ul>
                                {this.state.links_aulas.p.map(aula =>
                                    <li>
                                        <label>{aula.turma}</label>
                                        <a href="">{aula.link}</a>
                                    </li>
                                )}
                            </ul>
                        </div>

                        {(this.state.links_aulas.tp !== undefined && this.state.links_aulas.tp !== null) &&
                            (<div className="links-container">
                                <h2>Teórico-Práticas</h2>
                                <ul>
                                    {this.state.links_aulas.tp.map(aula =>
                                        <li>
                                            <label>{aula.turma}</label>
                                            <a href="">{aula.link}</a>
                                        </li>
                                    )}
                                </ul>
                            </div>)
                        }
                        
                    </div>
                </div>

                <div className="dates-container">
                    <Calendar month={4} year={2020} data={this.state.calendarData}/>

                    <div className="datas-entrega-container">
                        <h2>Datas de entrega</h2>

                        <ul>
                            {Object.entries(this.state.calendarData).map(entrega => 
                                    <li>
                                        <label>{entrega[1].nome}</label>
                                        <label>{entrega[1].tipo}</label>
                                        <label>{entrega[0]}</label>
                                    </li>
                                )}
                        </ul>
                    </div>
                </div>


                <div className="links-files-container">
                    <div className="links-videos">
                        <h2>Links para vídeos</h2>

                        <ul>
                            {this.state.links_videos.map(video => 
                                (<li>
                                    <div className="info-row">
                                        <label>{video.assunto}</label>
                                        <label>{video.date}</label>
                                    </div>
                                    <a>{video.link}</a>
                                    <div className="divider"></div>
                                </li>
                                )
                            )}
                        </ul>
                    </div>

                    <div className="links-apontamentos">
                        <h2>Links para apontamentos</h2>

                        <ul>
                            {this.state.links_apontamentos.map(video => 
                                (<li>
                                    <div className="info-row">
                                        <label>{video.assunto}</label>
                                        <label>{video.date}</label>
                                    </div>
                                    <a>{video.link}</a>
                                    <div className="divider"></div>
                                </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>


            </div>
        )
    }
}

export default CadeiraInfo