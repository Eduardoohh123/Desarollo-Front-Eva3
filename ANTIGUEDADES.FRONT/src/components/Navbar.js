import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Antigüedades Sthandier</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/quienes-somos">Quienes Somos</Link>
                </li>
                <li>
                    <Link to="/productos">Productos</Link>
                </li>
                <li>
                    <Link to="/preguntas-frecuentes">Preguntas Frecuentes</Link>
                </li>
                <li>
                    <Link to="/contacto">Contáctanos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;