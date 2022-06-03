
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
                  <div className="lign"><p>1. Chercher un <span className="erp">prestataire</span> et le <span className="erp">Contacter</span>.</p> </div>
                  <div className="lign"><p>2. Les prestataires <span className="erp">disponibles</span> et <span className="erp">compétents</span> vous proposent leurs <span className="erp"></span>services.</p> </div>
                  <div className="lign"><p>3. <span className="erp">Evaluez</span> et <span className="erp">réglez</span> votre prestataire une fois que la<span className="erp">mission</span> est terminée.</p> </div>
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