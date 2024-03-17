import React, {useState} from 'react';
import logo from "../assets/Logo.png"
import {Link, NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faX} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
        const [isOpen,setIsOpen] = useState(false)

        const handleOpenMenu = () => {
            setIsOpen(!isOpen)
        }


    return (
        <header>
            <div className="container">
                <div className="header_menu_hamburger">
                <img alt={logo} src={logo}/>
                {isOpen ? (
                    <FontAwesomeIcon className="header_icon"  icon={faX} onClick={handleOpenMenu} />
                ) : (
                    <FontAwesomeIcon className="header_icon" icon={faBars} onClick={handleOpenMenu} />
                )}
                </div>
                <ul className={`header_menu ${isOpen ? 'open' : ''}`}>
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