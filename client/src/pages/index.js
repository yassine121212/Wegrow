import {React} from "react";
import "./style.css";
import Footer from "../components/Footer/index";
import Slider from "../components/Slider/slid/Slider";
import Service from "../components/Services/Service";
 

const Home = () => {
     
    return (
        <div className="oral">
            <div className="pivc">
                <Slider />
                <Service/>
                 <Footer />
            </div>
        </div>
    );
 
};


export default Home;
