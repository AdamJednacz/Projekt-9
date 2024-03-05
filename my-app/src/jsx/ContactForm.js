import React from 'react';
import form_img from "../assets/form_img.png"
import btn_arrow_white from "../assets/white_arrow.png";

const ContactForm = () => {
    return (
        <section className="contact_form">
            <div className="container">
                <h1>Contact Us</h1>
                <div className="contact_form_items">
                    <form>
                        <input type="text"  placeholder="Name" />
                        <input type="number" placeholder="Phone Number"/>
                        <input type="email" placeholder="E-mail"/>
                        <input type="text" placeholder="Interested In"/>
                        <input type="text" placeholder="Message"/>
                    </form>
                    <img src={form_img} alt={form_img}/>
                </div>
                <div className="contact_form_btn">
                    <p>Send Email</p>
                    <img src={btn_arrow_white} alt={btn_arrow_white}/>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;