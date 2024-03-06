import React from 'react';
import logo from "../assets/Logo.png"
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="container">
                <img alt={logo} src={logo}/>
                <ul className="header_menu">
                    <li className="header_menu_item"><NavLink className="link" to={"/"}>Main</NavLink></li>
                    <li className="header_menu_item"><NavLink className="link" to={"/photos"}>Gallery</NavLink></li>
                    <li className="header_menu_item"><NavLink className="link" to={"/projects"}>Projects</NavLink></li>
                    <li className="header_menu_item"><NavLink className="link" to={"/certifications"}>Certifications</NavLink></li>
                    <li className="header_menu_item"><NavLink className="link" to={"/contacts"}>Contacts</NavLink></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;