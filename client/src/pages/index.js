import {React} from "react";
import "./style.css";
import Footer from "../components/Footer/index";
import Slider from "../components/Home/Slider/slid/Slider";
import Service from "../components/Home/Services/Service";
import Who from "../components/Home/who_we/who";
import How from "../components/Home/How_to_use/How";
 import Feedback from "../components/Home/feedback/feedback";
 import AfficherFeed from "../components/Home/feedback/AfficherFeedback"


const Home = () => {
     
    return (
        <div className="oral">
            <div className="pivc">
            
                <Slider />
                <Service/>
                <Feedback/>
                <AfficherFeed/>
                 <Who/>
                 <How/>
                <Footer />
        
            </div>
        </div>
    );
 
};


export default Home;
