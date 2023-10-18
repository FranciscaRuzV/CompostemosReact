import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <input type="checkbox" name="" id="toggler" />
      <label htmlFor="toggler" className="fas fa-bars"></label>

      <a href="#inicio" className="logo">
        Compostemos <span>.</span>
      </a>

      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/sobre-nosotros">Sobre Nosotros</Link>
        <Link to="/comunidad">La Comunidad</Link>
        <Link to="/educacion">Educación</Link>
        <a href="#"></a>
      </nav>
      <div className="icons">
        <a href="./login.html" className="fas fa-user"></a>
      </div>
    </header>
  );
}
