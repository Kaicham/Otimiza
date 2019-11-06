import React from 'react'
import './Menu.css'

const Menu2 = () => {

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    return(
        <div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <a href="#">Relatórios</a>
            <a href="#">Faturamento</a>
            <a href="#">Despesas</a>
            <a href="#">Análise Gráfica</a>
            <a href="#">Financeiro</a>
            <a href="#">Estoques</a>
        </div>
    )
}

export default Menu2;