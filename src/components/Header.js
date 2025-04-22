import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-container">
                    <img src="/Logo-Title.png" alt="DEALERTEAM" className="logo" />
                    <nav className="nav-menu">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <a href="#products" className="nav-link">Products</a>
                            </li>
                            <li className="nav-item">
                                <a href="#solutions" className="nav-link">Solutions</a>
                            </li>
                            <li className="nav-item">
                                <a href="#resources" className="nav-link">Resources</a>
                            </li>
                            <li className="nav-item">
                                <a href="#pricing" className="nav-link">Pricing</a>
                            </li>
                        </ul>
                    </nav>
                </div>


                <div className="header-buttons">
                    <a href="#login" className="login-button">Login</a>
                    <a href="#contact" className="contact-button">Contact Sales</a>
                </div>
            </div>
        </header>
    );
};

export default Header;