import React from 'react'
import '../css/CadeiraInfo.scss'
import '../css/Calendar.scss'
import Calendar from '../components/Calendar'
import { MdEmail } from "react-icons/md";
import {getSessionCookie, deleteSessionCookie} from '../sessions.js'

class CadeiraInfo extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            cadeira: {},
            professor: { },
            calendarData: {},
            links_aulas: {
                t: [],
                p: []
            },
            links_videos: [],
            links_apontamentos: []
        }

    }

    componentDidMount = (props) => {
        const splitUrl = window.location.toString().split("/")
        const id = splitUrl[splitUrl.length-1]
        fetch("https://apont-plat-api.ugomes.com/cadeiras/query_cadeira_info.php?id="+id,{
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
                    case 500:
                        window.location = "/500_error"
                }
            })
            .then(res => {
                if(res){
                    this.setState({
                        cadeira: res.cadeira,
                        professor: res.professor,
                        calendarData: this.parseDateStringFormat(res.CalendarData),
                        links_aulas: res.links_aulas,
                        links_videos: res.links_videos,
                        links_apontamentos: res.links_apontamentos
                    })
                    
                }
            })
    }

    parseDateStringFormat = (reqCalendarData) => {
        let calendarData = Object.entries(reqCalendarData).splice(0, 2)
        let parsedCalendarData = {}
        let splitDateTime = []
        let splitDate = []
        let tmp = ""

        for(let i = 0; i < calendarData.length; i++){
            splitDateTime = calendarData[i][0].split(' ')
            splitDate = splitDateTime[0].split('-')
            tmp = splitDate[0]

            splitDate[0] = splitDate[2]
            splitDate[2] = tmp;

            splitDateTime[0] = splitDate.join("/")

            console.log(calendarData[i])

            parsedCalendarData[splitDateTime[0]] = {
                time: splitDateTime[1],
                nome: calendarData[i][1].nome,
                tipo: calendarData[i][1].tipo
            }
            
        }
        return parsedCalendarData
    }

    render(){
        return (
            <div className="outter-container">

                <div className="info-container">
                    <div className="info-card">
                        <div className="cadeira">
                            <h1>{this.state.cadeira.nome}</h1>
                            {/* <label>Métodos de avaliação:</label>
                            <ul>
                                {this.state.cadeira.metodos_avaliacao.map(avaliacao =>
                                    <li>{avaliacao.peso} - {avaliacao.nome}</li>)}
                            </ul> */}
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
                                {
                                    (this.state.links_aulas.t.length === 0) ?
                                        <li>Nenhum link disponível</li>
                                    :
                                        (this.state.links_aulas.t.map(aula =>
                                            <li>
                                                <label>{aula.turma}</label>
                                                <a href={aula.link}>{aula.link}</a>
                                            </li>
                                        ))
                                }
                            </ul>
                        </div>

                        <div className="links-container">
                            <h2>Práticas</h2>
                            <ul>
                                {
                                    (this.state.links_aulas.p.length === 0) ?
                                        <li>Nenhum link disponível</li>
                                    :
                                    this.state.links_aulas.p.map(aula =>
                                        <li>
                                            <label>{aula.turma}</label>
                                            <a href={aula.link}>{aula.link}</a>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>

                        {(this.state.links_aulas.tp !== undefined) &&
                            (<div className="links-container">
                                <h2>Teórico-Práticas</h2>
                                <ul>
                                    {
                                        (this.state.links_aulas.tp.length === 0) ?
                                            <li>Nenhum link disponível</li>
                                        :
                                        this.state.links_aulas.tp.map(aula =>
                                            <li>
                                                <label>{aula.turma}</label>
                                                <a href={aula.link}>{aula.link}</a>
                                            </li>
                                        )
                                    }
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
                            {
                                (Object.keys(this.state.calendarData).length === 0) ?
                                    <li>Nenhuma data disponível</li>
                                :
                                Object.entries(this.state.calendarData).map(entrega => 
                                    <li>
                                        <label>{entrega[1].nome}</label>
                                        <label>{entrega[1].tipo}</label>
                                        <label>{entrega[0]}  {entrega[1].time}</label>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>


                <div className="links-files-container">
                    <div className="links-videos">
                        <h2>Links para vídeos</h2>

                        <ul>
                            {
                                (this.state.links_videos.length === 0) ?
                                    <li>Nenhum link disponível</li>
                                :
                                this.state.links_videos.map(video => 
                                    (<li>
                                        <div className="info-row">
                                            <label>{video.assunto}</label>
                                            <label>{video.date}</label>
                                        </div>
                                        <a href={video.link}>{video.link}</a>
                                        <div className="divider"></div>
                                    </li>
                                    )
                                )
                            }
                        </ul>
                    </div>

                    <div className="links-apontamentos">
                        <h2>Links para apontamentos</h2>

                        <ul>
                            {
                                (this.state.links_apontamentos.length === 0) ?
                                    <li>Nenhum link disponível</li>
                                :
                                this.state.links_apontamentos.map(apontamento => 
                                    (<li>
                                        <div className="info-row">
                                            <label>{apontamento.assunto}</label>
                                            <label>{apontamento.date}</label>
                                        </div>
                                        <a href={apontamento.link}>{apontamento.link}</a>
                                        <div className="divider"></div>
                                    </li>
                                    )
                                )
                            }
                        </ul>
                    </div>
                </div>


            </div>
        )
    }
}

export default CadeiraInfo