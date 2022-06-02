
import "./How.css"
import { IoAlertCircleOutline } from "react-icons/io5";
import bal from "../../../images/Come back later.png";

const How = ()=>{
   return (
     <>
         <div className="all1">

           <div className="disc1">
              <h1 className="tit2">Comment ça marche ?</h1>
                <div className="par1">
                  <div className="lign"><p>1. Chercher un prestataire et le Contacter.</p> </div>
                  <div className="lign"><p>2. Les prestataires disponibles et compétents vous proposent leurs services.</p> </div>
                  <div className="lign"><p>3. Evaluez et réglez votre prestataire une fois que la mission est terminée.</p> </div>
                </div>
           </div>
           <div className="picdisc">
           <img className="whoimage" src={bal} alt="" />

             <div className="gogo">
                 </div>
 

           </div>
       </div>
      </>
   );
}
export default How;