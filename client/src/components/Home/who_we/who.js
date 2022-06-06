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
       <div><h1 className='title_services' > <IoAlertCircleOutline></IoAlertCircleOutline><span> À propos</span>&nbsp;De nous</h1></div> 
       <div className="all">

           <div className="picdisc">

           <img className="whoimage" src={Med} alt="" />
           </div>
           <div className="disc">
              <h1 className="tit1">WeGrow</h1>
                <p className="par">
                De nouveaux modèles de consommation ont émergé grâce à l'essor de nouveaux
                technologies et évolution des modes de vie. Le jobbing permet des dizaines de
                des milliers de fournisseurs de services pour fournir des services dans leur
                quartier et gagner un revenu complémentaire ou lancer leur indépendant
                activité.
             <span className="work_color"><b>WeGrow</b></span> est une plateforme collaborative faisant partie d'un
                tendance de fond : de nombreux secteurs connaissent leur mutation technologique
                révolution comme le transport avec covoiturage, la location de voiture entre
                des particuliers ou des logements. Avec <span className="work_color"><b>WeGrow</b></span>, le marché du travail subit une
                révolution! <ReadMore>Le principe est simple : connecter un "poster" (une personne
                qui a besoin d'un coup de main pour les services, installation de cuisine, dressing
                 montage de pièce, peinture, pose de parquet, carrelage, déménagement, jardinage)
                  et un "prestataire" (personne disposant des compétences et du temps disponible) en
                  sécurité complète. Un modèle innovant à la clé des services
                  à ceux qui n'ont ni le temps ni les compétences pour faire
                  tout eux-mêmes, et des revenus supplémentaires et en développement
                  savoir-faire pour les prestataires de services. Ils sont étudiants, retraités,
                  les salariés à temps partiel, ou les personnes souhaitant créer leur propre entreprise.</ReadMore></p>
                  
           </div>
       </div>
       </div>
     </>
   );
}
export default who;