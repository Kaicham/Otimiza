import React from 'react'
import './Introducao.css'
import Computador from './Computador.jpeg'
import Caixa from './Caixa.jpeg'

const IntroducaoSecundaria = () => {
    return (
        <div className="introducao">
            <h1>O que você encontrará por aqui:</h1>
            <section className="informacoes">
                <div className="info-item">
                    <h3>Relatórios</h3>
                    <p>Fluxo de Caixa, Demonstrativo de<br/>Fluxo de Caixa, Demonstração de<br/>Resultado do exercício e Balanço<br/>Patrimonial. Acompanhe aqui!</p>
                </div>
                <div className="info-item">
                    <h3>Estoque</h3>
                    <p>Tenha conhecimento de<br/>quanto seu negocio possui,<br/>de fato, para vender.</p>
                </div>
                <img src={Computador} alt="" className="info-item-img"/>
                <img src={Caixa} alt="" className="info-item-img"/>
                <div className="info-item">
                    <h3>Indicadores</h3>
                    <p>Indicadores financeiros que<br/>podem te guiar e mostrar em<br/>que seu negócio pode<br/>melhorar.</p>
                </div>
            </section>
        </div>
    )
}

export default IntroducaoSecundaria;