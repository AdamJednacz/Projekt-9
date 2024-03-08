import React from 'react';
import left from "../assets/L_arrow.png";
import right from "../assets/R_arrow.png";
import btn_arrow from "../assets/btn_view_arrow.svg";
import ProjectsMainImg3 from "../assets/ProjectsMainImg(1).png"
import ProjectsMainImg2 from "../assets/ProjectsMainImg(2).png"
import ProjectsMainImg1 from "../assets/ProjectsMainImg(3).png"
const ProjectsMain = () => {
    return (
        <section className="projects_main">
            <div className="container">
                <h1>Our</h1>
                <h1>Projects</h1>
                <div className="projects_main_items">
                    <div className="projects_main_item">
                        <img src={ProjectsMainImg1} alt={ProjectsMainImg1}/>
                        <div className="projects_main_item_text">
                            <h2>Sample Project </h2>
                            <p className="projects_main_item_text_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <div className="projects_main_item_text_btn">
                                <p className="projects_main_item_text_btn_p">View More</p>
                                <img src={btn_arrow} alt={btn_arrow}/>
                            </div>
                        </div>
                    </div>
                    <div className="projects_main_item">
                        <img src={ProjectsMainImg2} alt={ProjectsMainImg2}/>
                        <div className="projects_main_item_text">
                            <h2>Sample Project 2</h2>
                            <p className="projects_main_item_text_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <div className="projects_main_item_text_btn">
                                <p className="projects_main_item_text_btn_p">view More</p>
                                <img src={btn_arrow} alt={btn_arrow}/>
                            </div>
                        </div>
                    </div>
                    <div className="projects_main_item">
                        <img src={ProjectsMainImg3} alt={ProjectsMainImg3}/>
                        <div className="projects_main_item_text">
                            <h2>Sample Project 3</h2>
                            <p className="projects_main_item_text_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <div className="projects_main_item_text_btn">
                                <p className="projects_main_item_text_btn_p">view More</p>
                                <img src={btn_arrow} alt={btn_arrow}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects_main_counter">
                    <div className="projects_main_counter_numbers">
                        <span>0</span>
                        <span>1</span>
                    </div>
                    <span>05</span>
                    <div className="projects_main_arrows">
                        <img className="projects_main_arrow" src={left} alt="left_arrow"/>
                        <img className="projects_main_arrow" src={right} alt="right_arrow"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsMain;