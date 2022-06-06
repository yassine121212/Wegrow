import React, {useState} from 'react';
import "./who.css"
import { IoAlertCircleOutline } from "react-icons/io5";
import Med from "../../../images/Meditation.jpg";

function ReadMore({children}) {

  const text = children;

  const [isShow, setIsShowLess] = useState(true);
  const result = isShow ? text.slice(0, 32) : text;

  function toggleIsShow() {
      setIsShowLess(!isShow);
  }

  return(
      <p className="par2">
          {result}
          <span className="non" onClick={toggleIsShow}>
              {isShow ? "Read More" : "Read Less"}
          </span>
      </p>
  )

}

const who = ()=>{
   return (
     <>
        <div id="about" className="lmp">
       <div><h1 className='title_services' > <IoAlertCircleOutline></IoAlertCircleOutline><span> About</span>&nbsp;Us</h1></div> 
       <div className="all">

           <div className="picdisc">

           <img className="whoimage" src={Med} alt="" />
           </div>
           <div className="disc">
              <h1 className="tit1">WeGrow</h1>
                <p className="par">
             
                New consumption models have emerged thanks to the rise of new 
                technologies and changing lifestyles. Jobbing allows tens of 
                thousands  of service providers to provide service in their 
                neighborhood and earn additional income or launch their independent 
                activity. <span className="work_color"><b>WeGrow</b></span> is a collaborative platform that is part of a 
                fundamental trend: many sectors are experiencing their technological 
                revolution such as transport with carpooling, car rental between 
                individuals or housing. With <span className="work_color"><b>WeGrow</b></span>, the job market is undergoing a 
                revolution! <ReadMore>The principle is simple: connect a "poster" (a person 
                who needs a helping hand for services, kitchen installation, dressing
                 room assembly, painting, parquet laying, tiling, moving, gardening)
                  and a "provider" (person with the skills and time available) in 
                  complete safety. An innovative model with the key to services 
                  provided for those who do not have the time or the skills to do 
                  everything themselves, and additional income and developing 
                  know-how for service providers. They are students, retirees, 
                  part-time employees, or people wishing to start their own business.</ReadMore></p>
                  
           </div>
       </div>
       </div>
     </>
   );
}
export default who;