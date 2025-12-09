import React, {useState} from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo-container">
                <img src={process.env.PUBLIC_URL + "/computer.jpg"} alt="Logo" className="icon"/>
                <h2> Li Website</h2>
            </div>
            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                ☰
            </button>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
                <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Resume</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
                <NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Gallery</NavLink>
            </nav>
        </header>
    );
}

export default Header;