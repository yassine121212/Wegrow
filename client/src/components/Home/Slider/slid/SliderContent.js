import React from "react";
import "./slider.css";


function SliderContent({ activeIndex, sliderImage }) {
    return (
        <section>
            {sliderImage.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? "slides active" : "inactive"}
                >
                    <img className="slide-images" src={slide.urls} alt="" />
                </div>
            ))}
        </section>
    );
}

export default SliderContent;