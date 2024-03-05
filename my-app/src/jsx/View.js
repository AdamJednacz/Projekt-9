import React from 'react';
import view from "../assets/View.png"
import left from "../assets/L_arrow.png"
import right from "../assets/R_arrow.png"
import btn_arrow from "../assets/btn_view_arrow.svg"

const View = () => {
    return (
        <section className="view">
            <div className="container">
                <div className="view_items">
                    <div className="view_item_text">
                        <h1>Project</h1>
                        <h2>Lorum</h2>
                        <div className="view_item_text_arrow_container">
                            <img src={left} alt="left_arrow"/>
                            <img src={right} alt="right_arrow"/>
                        </div>
                    </div>
                    <img className="view_item_img" src={view} alt={view}/>
                </div>
                <div className="view_btn">
                    <p>View Project</p>
                    <img src={btn_arrow} alt={btn_arrow}/>
                </div>
            </div>
        </section>
    );
};

export default View;