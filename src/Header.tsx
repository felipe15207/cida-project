import { NavLink } from "react-router";
import "./header.css"
import { useState } from "react"

import { PageSettings } from "./wiggets/BtnConfig";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    }

    return(
        <header className="header">
            <div className="container navbar">

                <button type="button" className={`hamburger ${isOpen ? "active" : ""}`}
                    onClick={toggleMenu}
                    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu">
                    <span />
                    <span />
                    <span />
                </button>

                <div className="left-header">
                    
                    <a href="#inicio" className="logo">
                        <span className="logo-icon">C</span>
                        <span>CIDA Project</span>
                    </a>


                    <nav>
                        <ul className={`nav-menu ${isOpen ? "active" : ""}`} id="navMenu">
                            <li>
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>

                            <li>
                                <NavLink to="/projetos" className="nav-link">Projetos</NavLink>
                            </li>

                            <li>
                                <NavLink to="/publicacoes" className="nav-link">Publicações</NavLink>
                            </li>

                            <li>
                                <NavLink to="/equipe" className="nav-link">Equipe</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <PageSettings />

            </div>
        </header>
    )
}

export default Header