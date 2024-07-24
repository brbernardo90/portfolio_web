import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <>
            <hr/>
            <footer className="footer">
                
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Phone</h4>
                        <p>123-456-7890</p>
                    </div>
                    <div className="footer-section">
                        <h4>Email</h4>
                        <p>info@mysite.com</p>
                    </div>
                    <div className="footer-section">
                        <h4>Follow Me</h4>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    </div>
                    <div className="footer-section">
                        <p>© 2024 By Brayan Bernardo.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
