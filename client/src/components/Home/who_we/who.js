
import "./who.css"
import { IoAlertCircleOutline } from "react-icons/io5";
import Med from "../../../images/Meditation.png";

const who = ()=>{
   return (
     <>
        <div id="about" className="lmp">
       <div><h1 className='title_services' > <IoAlertCircleOutline></IoAlertCircleOutline> About</h1></div> 
       <div className="all">
       

           <div className="picdisc">
                <svg className="blo" viewBox="0 0 200 200" xmlnsXlink="http://www.w3.org/2000/svg">
                <path fill="#fcc264" d="M40.2,-69C50.3,-63.8,55.4,-49.3,55.6,-36.3C55.9,-23.3,51.3,-11.6,46.7,-2.7C42.2,6.3,37.5,12.7,36.7,24.7C35.8,36.8,38.8,54.5,33.3,61.5C27.8,68.4,13.9,64.5,2,61.1C-10,57.7,-20,54.8,-26.9,48.7C-33.8,42.6,-37.7,33.3,-43.1,24.6C-48.5,16,-55.5,8,-57.4,-1.1C-59.3,-10.2,-56.2,-20.4,-49.2,-26.3C-42.2,-32.3,-31.4,-33.9,-22.5,-39.8C-13.7,-45.7,-6.8,-55.8,4.1,-62.9C15.1,-70.1,30.1,-74.1,40.2,-69Z" transform="translate(100 100)" />
              </svg>
              <img className="whoimage" src={Med} alt="" />


           </div>
           <div className="disc">
              <h1 className="tit1">WeGrow</h1>
                <p className="par">
                New consumption models have emerged thanks to the rise of new 
                technologies and changing lifestyles. Jobbing allows<b> tens of 
                thousands</b>  of service providers to provide service in their 
                neighborhood and earn additional income or launch their independent 
                activity. <span className="work_color"><b>WeGrow</b></span> is a collaborative platform that is part of a 
                fundamental trend: many sectors are experiencing their technological 
                revolution such as transport with carpooling, car rental between 
                individuals or housing. With <span className="work_color"><b>WeGrow</b></span>, the job market is undergoing a 
                revolution! The principle is simple: connect a "poster" (a person 
                who needs a helping hand for services, kitchen installation, dressing
                 room assembly, painting, parquet laying, tiling, moving, gardening)
                  and a "provider" (person with the skills and time available) in 
                  complete safety. An innovative model with the key to services 
                  provided for those who do not have the time or the skills to do 
                  everything themselves, and additional income and developing 
                  know-how for service providers.<b> They are students, retirees, 
                  part-time employees, or people wishing to start their own business</b>.</p>
           </div>
       </div>
       </div>
     </>
   );
}
export default who;