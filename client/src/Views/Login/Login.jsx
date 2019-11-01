import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import imagem from './login.jpeg'

const Login = () => {
    return (
        <div className="container">
            <div className="informativo">
                <h2>Controle suas finanças com o nosso <br/> software de gestão empresarial</h2>
                <img alt='oi' src={imagem} className="image"/>
                <h1>Planeje, Inove, Otimize</h1>
            </div>
            <div className="login">
                <input type="text" className="inputLogin" placeholder="Login"/>
                <input type="password" className="inputLogin" placeholder="Senha"/>
                <Link to="/intro">
                    <button className="btn" type="submit">logar</button>
                </Link>
            </div>
        </div>
    )
}

export default Login;