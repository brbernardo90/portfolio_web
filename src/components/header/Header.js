import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="brand">
                <span className="dot"></span>
                <Link to="/"><h1> Brayan Bernardo</h1></Link>
                <span className="profession">Software Engineer</span>
            </div>
            <nav className="navbar">
                <Link to="/resume">Resume</Link>
                {/* <Link to="/skill">Skills</Link> */}
                <Link to="/projects">Projects</Link>
                {/* <Link to="/contact">Contact</Link> */}
            </nav>
        </div>
    );
};

export default Header;