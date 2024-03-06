import React from 'react';
import footer_logo from "../assets/Footer_logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope,} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedin, faPinterestP } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_items">
                    <img src={footer_logo} alt={footer_logo}/>
                    <div className="footer_item">
                        <h1>Information</h1>
                        <p>Main</p>
                        <p>Gallery</p>
                        <p>Projects</p>
                        <p>Certifications</p>
                        <p>Contacts</p>
                    </div>
                    <div className="footer_item">
                        <h1>Contacts</h1>
                        <div className="footer_item_container">
                            <FontAwesomeIcon className="footer_item_container_icon" icon={faLocationDot} />
                            <p>1234 Sample Street
                                Austin Texas 78681</p>
                        </div>
                        <div className="footer_item_container">
                            <FontAwesomeIcon className="footer_item_container_icon" icon={faPhone} />
                            <p>512.333.2222</p>
                        </div>
                        <div className="footer_item_container">
                            <FontAwesomeIcon className="footer_item_container_icon" icon={faEnvelope} />
                            <p>sampleemail@gmail.com</p>
                        </div>
                    </div>
                    <div className="footer_item">
                        <h1>Social Media</h1>
                        <div className="footer_item_container">
                            <FontAwesomeIcon className="footer_item_container_icon" icon={faFacebookF} />
                            <FontAwesomeIcon className="footer_item_container_icon" icon={faTwitter} />
                            <FontAwesomeIcon className="footer_item_container_icon" icon={faLinkedin} />
                            <FontAwesomeIcon className="footer_item_container_icon" icon={faPinterestP} />
                        </div>
                    </div>
                </div>
                <div className="footer_copy">
                    <p className="footer_copy_p">&#169; 2021 All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;