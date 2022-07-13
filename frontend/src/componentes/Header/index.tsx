import React from "react"
import logo from "../../assets/imagem/logo.svg"
import "./styles.css"

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="Logo principal" />
                    <h1>Projeto DSMeta</h1>
                </div>
            </header>
        </>
    )
}

export default Header