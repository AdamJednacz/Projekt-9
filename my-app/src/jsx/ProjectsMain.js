import React from 'react';
import btn_arrow from "../assets/btn_view_arrow.svg";
import btn_arrow_white from "../assets/white_arrow.png";
import project1 from "../assets/projekt1.png";
import project2 from "../assets/projekt2.png";
import project3 from "../assets/projekt3.png";
import project4 from "../assets/projekt4.png";

const ProjectsMain = () => {
    return (
        <section className="projects_main">
            <div className="container">
               <h1>Our Projects</h1>
                <div className="projects_main_items">
                    <div className="projects_main_item">
                        <div className="projects_main_item_text">
                            <h2>Sample</h2>
                            <h2>Project</h2>
                            <div className="projects_main_item_text_btn">
                                <p>View More</p>
                                <img src={btn_arrow_white} alt={btn_arrow_white}/>
                            </div>
                        </div>
                        <img className="projects_main_item_text_img" src={project2} alt={project2}/>
                    </div>
                    <div className="projects_main_item">
                        <img className="projects_main_item_img" src={project1} alt={project1}/>
                        <img className="projects_main_item_img" src={project4} alt={project4}/>
                        <img className="projects_main_item_img" src={project3} alt={project3}/>
                    </div>
                </div>
                <div className="projects_main_btn">
                    <p>All projects</p>
                    <img src={btn_arrow_white} alt={btn_arrow_white}/>
                </div>
            </div>
        </section>
    );
};

export default ProjectsMain;