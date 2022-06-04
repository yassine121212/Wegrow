import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import sliderImage from "./sliderImage";
import "./slider.css";
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link  } from "react-router-dom";
  


const len = sliderImage.length - 1;

function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="slider-container">
            <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
            
            <div className="slide-text">
                <p>De vrais <span className="ter">bricoleurs</span> pour vous <span className="ter">aider </span>
                    Travaux, déménagements, livraisons <span className="ter">&</span> services à domicile</p>
                <br/><Link to="/services" > <button  className="buttslid">Demander un service</button></Link>

            </div>
        </div>
    );
}

export default Slider;