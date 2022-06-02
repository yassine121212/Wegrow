import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import sliderImage from "./sliderImage";
import "./slider.css";
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';


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
        <div className="  slider-container">
            <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
            
            <div className="slide-text">
                <p>De vrais bricoleurs pour vous aider
                    Travaux, déménagements, livraisons & services à domicile</p>
                <br/> <Button variant="contained" size="large" startIcon={<AddCircleIcon />} href="/services">Demander un service</Button>

            </div>
        </div>
    );
}

export default Slider;