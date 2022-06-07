
import "./How.css"
import { IoAlertCircleOutline } from "react-icons/io5";
import bal from "../../../images/Come back later.png";
import ReactPlayer from 'react-player'

const appvideo="https://www.youtube.com/watch?v=SMcztSqSQ18"
 const How = ()=>{
   return (
     <>
         <div className="all1">

           <div className="disc1">
              <h1 className="title_services"><span>Comment </span>ça marche ?</h1>
                <div className="par1" >
                  <div className="lign"><p>1. Chercher un <span className="erp">prestataire</span> et le <span className="erp">Contacter</span>.</p> </div>
                  <div className="lign"><p>2. Les prestataires <span className="erp">disponibles</span> et <span className="erp">compétents</span> vous proposent leurs <span className="erp"></span>services.</p> </div>
                  <div className="lign"><p>3. <span className="erp">Evaluez</span> et <span className="erp">réglez</span> votre prestataire une fois que la <span className="erp">mission</span> est terminée.</p> </div>
                </div>
           </div>
            <div className="picdisc">
              <ReactPlayer
                src={appvideo}
                controls
                className="vido"

              />
            </div>
       </div>
      </>
   );
}
export default How;