import React from 'react';
import btn_arrow from "../assets/btn_view_arrow.svg";
import aboutimg1 from "../assets/about_1.png";
import aboutimg2 from "../assets/about_2.png";
import aboutimg3 from "../assets/about_3.png";

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about_items">
                    <div className="about_item_imgs">
                        <div className="about_item_imgs_container">
                        <img src={aboutimg1} alt="img"/>
                        <img className="about_item_img_phone" src={aboutimg3} alt="img"/>
                        </div>
                        <img src={aboutimg2} className="about_item_img_tablet" alt="img"/>
                    </div>
                    <div className="about_item_text">
                        <h1>About</h1>
                        <p className="about_item_text_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <div className="about_item_text_btn">
                            <p className="about_item_text_btn_p">Read More</p>
                            <img src={btn_arrow} alt={btn_arrow}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;