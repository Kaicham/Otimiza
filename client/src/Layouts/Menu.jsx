import React, { useState } from 'react'
import logo from '../static/logo.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import './Menu.css'

const Menu = (props) => {

    const [rotate, setRotate] = useState(0);
    const [open, setOpen] = useState(false);

    function handleMenu() {
        if(open) {
            closeMenu()
            setOpen(!open)
            return
        }
        openMenu()
        setOpen(!open)
    }

    function openMenu() {
        document.getElementById('menu').style.width="200px"; 
        document.getElementById("main").style.marginLeft = "200px";
        setRotate(180)
    }

    function closeMenu() {
        document.getElementById('menu').style.width="0px"; 
        document.getElementById("main").style.marginLeft = "0px";
        setRotate(0)
    }

    return (
        <div id="main">
            <nav className="navbar">
                <FontAwesomeIcon icon={faChevronRight} className="icon-menu" onClick={handleMenu} rotation={rotate}/>
                <h1>{props.title}</h1>
                <img src={logo} alt="" className="icon-image"/>
            </nav>

            {props.component}
            
            <div id="menu" className="sideMenu" >
                <img src={logo} alt="" className="logo"/>
                <ul>
                    <li><a href="#">Relatótios</a></li>
                    <li><a href="#">Faturamento</a></li>
                    <li><a href="#">Análise Gráfica</a></li>
                    <li><a href="#">Financeiro</a></li>
                    <li><a href="#">Estoques</a></li>
                    <li><a href="#">Fluxo de Caixa</a></li>
                </ul>
            </div>
        </div>
    )

}

export default Menu;