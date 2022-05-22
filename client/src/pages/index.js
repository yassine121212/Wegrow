import {React} from "react";
import "./style.css";
import Footer from "../components/Footer/index";
import Slider from "../components/Home/Slider/slid/Slider";
import Service from "../components/Home/Services/Service";
import Who from "../components/Home/who_we/who";
 import Feedback from "../components/feedback/feedback";

const Home = () => {
     
    return (
        <div className="oral">
            <div className="pivc">
                <Slider />
                <Service/>
                <Feedback/>
                 <Who/>
                <Footer />
            </div>
        </div>
    );
 
};


export default Home;
