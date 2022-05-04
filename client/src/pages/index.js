import React from "react";
import "./style.css";
import Footer from "../components/Footer/footer";
import Slider from "../components/Slider/slid/Slider"


const Home = () => {
    return (
        <div className="oral">
            <div className="pivc">
                <Slider />
                <Footer />
            </div>
        </div>
    );
 
};


export default Home;
