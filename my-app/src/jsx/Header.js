import React from 'react';
import logo from "../assets/Logo.png"
const Header = () => {
    return (
        <header>
            <div className="container">
                <img alt={logo} src={logo}/>
                <ul className="header_menu">
                    <li className="header_menu_item">Main</li>
                    <li className="header_menu_item">Gallery</li>
                    <li className="header_menu_item">Projects</li>
                    <li className="header_menu_item">Certifications</li>
                    <li className="header_menu_item">Contacts</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;