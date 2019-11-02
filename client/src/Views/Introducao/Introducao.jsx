import React from 'react'
import './Introducao.css'
import Mao from './Mao.jpeg'
import Moeda from './Moeda.jpeg'

const Introducao = () => {
    return (
        <div className="introducao">
            <h1>O que você encontrará por aqui:</h1>
            <section className="informacoes">
                <div className="info-item">
                    <h3>Relatórios</h3>
                    <p>Controle, de forma clara,<br/> visual e organizada, todo o<br/>faturamento da sua empresa</p>
                </div>
                <div className="info-item">
                    <h3>Custos</h3>
                    <p>Discrimine cada gasto de seu<br/>negócio. Salário de funcionários,<br/> gasto com fornecedores, custo<br/>por produção, dispêndio com<br/>insumos e mais.</p>
                </div>
                <img src={Mao} alt="" className="info-item-img"/>
                <img src={Moeda} alt="" className="info-item-img"/>
                <div className="info-item">
                    <h3>Despesas</h3>
                    <p>Todo o gasto que não está diretamente<br/>relacionado diretamente à produção.<br/>Água, luz, marketing, despesas<br/>administrativas e afins.</p>
                </div>
            </section>
        </div>
    )
}

export default Introducao;