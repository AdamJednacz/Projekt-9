import React, { useState, useEffect } from 'react';
import view from "../assets/View.png"
import view1 from "../assets/view1.png"
import left from "../assets/L_arrow.png"
import right from "../assets/R_arrow.png"
import btn_arrow from "../assets/btn_view_arrow.svg"

const View = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
    const images = [view, view1];

    useEffect(() => {
        setIsClicked(true)
        const timer = setTimeout(() => {
            setIsClicked(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [imageIndex]);

    const handleCarouselNext = () => {
        setImageIndex(prevImage => (prevImage + 1) % images.length);
    }

    const handleCarouselPrev = () => {
        setImageIndex(prevImage => (prevImage - 1 + images.length) % images.length);
    }

    return (
        <section className="view">
            <div className="container">
                <div className="view_items">
                    <div className="view_item_text">
                        <div>
                            <h1>Project</h1>
                            <h2>Lorum</h2>
                        </div>
                        <div className="view_item_text_arrow_container">
                            <img className="view_item_text_arrow" onClick={handleCarouselPrev} src={left} alt="left_arrow"/>
                            <img className="view_item_text_arrow" onClick={handleCarouselNext} src={right} alt="right_arrow"/>
                        </div>
                        <div className="view_item_text_numbers">
                            <div className="view_item_text_numbers_counter">
                                <span>0</span>
                                <span>{imageIndex + 1}</span>
                            </div>
                            <span>02</span>
                        </div>
                    </div>
                    <img className={` ${isClicked ? "animate" : ""} ${imageIndex === 1 ? "view_item_img_2" : "view_item_img"}`} src={images[imageIndex]} alt={`view${imageIndex}`}/>
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
