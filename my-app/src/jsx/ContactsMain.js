import React from 'react';
import btn_arrow_white from "../assets/white_arrow.png";
import map from "../assets/map.png"
const ContactsMain = () => {
    return (
        <section className="contacts_main">
            <div className="container">
                <div className="contacts_main_items">
                    <h1>Contact</h1>
                    <h1>Information</h1>
                    <p>Company Name</p>
                    <p>1234 Sample Street Austin Texas 76401</p>
                    <p>512.333.2222</p>
                    <p>sampleemail@gmail.com</p>
                    <div className="contacts_main_item_btn">
                        <p>Contact Us</p>
                    </div>
                </div>
                <img src={map} alt={map}/>
            </div>
        </section>
    );
};

export default ContactsMain;