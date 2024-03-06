import React from 'react';
import photos1 from "../assets/photos(1).png"
import photos2 from "../assets/photos(2).png"
import photos3 from "../assets/photos(3).png"
import photos4 from "../assets/photos(4).png"
import photos5 from "../assets/photos(5).png"
import photos6 from "../assets/photos(6).png"
import photos7 from "../assets/photos(7).png"
import photos8 from "../assets/photos(8).png"
import photos9 from "../assets/photos(9).png"
import photos10 from "../assets/photos(10).png"
import left from "../assets/L_arrow.png";
import right from "../assets/R_arrow.png";
const PhotoGalleryMain = () => {

    const img = {photos1,photos2,photos3,photos4,photos5,photos6,photos7,photos8,photos9,photos10}
    return (
        <section className="photo_gallery_main">
            <div className="container">
                <h1>Photo</h1>
                <h1>Gallery</h1>
                <div className="photo_gallery_main_items">
                    {Object.keys(img).map((key, index) => (
                        <img key={index} src={img[key]} alt={`Photo ${index + 1}`} className="photo_gallery_main_item"/>
                    ))}
                </div>
                <div className="photos_gallery_main_counter">
                    <div className="photos_gallery_main_counter_numbers">
                        <span>0</span>
                        <span>1</span>
                    </div>
                    <span>05</span>
                    <div className="photos_gallery_main_arrows">
                        <img className="photos_gallery_main_arrow" src={left} alt="left_arrow"/>
                        <img className="photos_gallery_main_arrow" src={right} alt="right_arrow"/>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PhotoGalleryMain;