import React from "react";

export default function Contacto() {
  return (
    <>
    <div className="contacto" id="contacto">
        <h2>Contacto</h2>
        <p>Podés escribirme a:</p>
        <a href="mailto:sanchezalexelian04@gmail.com" target="_blank" className="correo">
        sanchezalexelian04@gmail.com
        </a>
        <div className="iconos">
            <a className="icono" href="https://github.com/Lion11700" target="_blank">
                <img src="src/imagenes/github.png" alt="GitHub" />
            </a>
            <a className="icono" href="https://www.linkedin.com/in/alexsanc/" target="_blank">
                <img src="src/imagenes/iconoIn.png" alt="LinkedIn" />
            </a>
      </div>
    </div>
    </>
)}
