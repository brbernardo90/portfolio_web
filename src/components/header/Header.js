import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="brand">
                <span className="dot"></span>
                <h1>Brayan Bernardo</h1>
                <span className="profession">Software Engineer</span>
            </div>
            <nav className="navbar">
                <a href="#resume">Resume</a>
                <a href="#resume">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;