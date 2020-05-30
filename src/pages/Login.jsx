import React from 'react'
import '../css/Login.scss'
import {setSessionCookie} from '../sessions.js'

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            password: "",
            wrong_pass: false
        }
    }

    handlePassword = (e) => this.setState({password: e.target.value})

    handleSubmit = (e) => {
        e.preventDefault()

        console.log("hello");

        fetch('https://apont-plat-api.ugomes.com/sign_in.php', {
            method: 'POST',
            body: JSON.stringify({user_password: this.state.password})
        }).
        then(res => {
            console.log(res.status)
            switch(res.status){
                case 200:
                    return res.json()
                default:
                    this.setState({
                        wrong_pass: true
                    })
            }
        })
        .then(res => {
            if(res){
                setSessionCookie(res.token)
                window.location = "/cadeiras"
            }
        })

    }

    render(){
        return (
            <div className="login">
                <img className="big-bg" src={require('../assets/login_bg.svg')} />
                <img className="mobile-bg" src={require('../assets/mobile_login_bg.svg')} />
                <div className="login-container">
                    <h1>ISEC<br/> CLASS REPO</h1>

                    <form onSubmit={this.handleSubmit}>
                        {(this.state.wrong_pass) && <label>Palavra passe errada!</label>}
                        <input type="password" className="txt-field" onChange={this.handlePassword} placeholder="Password"/>
                        <input type="submit" value="Login" className="button"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login