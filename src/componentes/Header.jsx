import React from "react";  
import linkedIn from '../imagenes/iconoIn.png';
import git from '../imagenes/github.png';
import mail from '../imagenes/iconoMail.png';
function Header() {
return(
    <div className="navbar">
        <div className="container-nav">
            <div className="navbar-logo">
                <a href="#" className="logo">Alex Sanchez</a>
            </div>
            <ul className="navbar-links">
                <li className="navbar-contenido">
                    <a href="#" className="nav-item">Inicio</a>
                </li>
                <li className="navbar-contenido">
                    <a href="#sobre-mi" className="nav-item">Sobre mi</a>
                </li>
                <li className="navbar-contenido">
                    <a href="#Proyectos" className="nav-item">Proyectos</a>
                </li>
                <li className="navbar-contenido">
                    <a href="#contacto" className="nav-item">Contacto</a>
                </li>
                <li>
                    <a className="icono" href="https://www.linkedin.com/in/alexsanc/" target="_blank">
                        <img src={linkedIn}  alt="Icono de LinkedIn" />
                    </a>
                </li>
                <li>
                    <a className="icono" href="https://github.com/Lion11700" target="_blank">
                        <img src={git}  alt="Icono de GitHub" />
                    </a>
                </li>
                <li>
                    <a className="icono" href="mailto:sanchezalexelian04@gmail.com" target="_blank">
                        <img src={mail}  alt="Icono de Correo" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
)};

export default Header;