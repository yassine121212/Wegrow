import React from 'react'
import First from "../../../images/jard.jpg"
import Second from "../../../images/sol.jpg"
import Menage from "../../../images/menage.jpg"
import Demenagement from "../../../images/demenagement.jpg"
import Informatique from "../../../images/informatique.jpg"
import Animaux from "../../../images/animaux.jpg"
import Peinture from "../../../images/peinture.jpg"
import Bricoleur from "../../../images/bricoleur.jpg"
import { BiCategoryAlt } from "react-icons/bi";
import './Service.css'
import { Link} from 'react-router-dom';
const Service = () => {
    return (
        <div className='best'>
          <div ><h1 className='title_services' > <BiCategoryAlt></BiCategoryAlt> <span>Nos </span>services</h1></div> 
            <div className='container'>
                <div className='image'>
                <Link to="/jardinage">
                <img className='service_img' src={First} alt='' />
                <div className='content'>
                <h2>Jardinage</h2>
                <p> Crée, aménage et entretient parcs, jardins et terrains de sport.</p>
                </div>
                </Link>
                </div>
                <div className='image'>
                <Link to="/bricolage">
                <img className='service_img' src={ Bricoleur} alt='' />
                <div className='content'>
                <h2>Bricolage</h2>
                <p> pose de cadres, de tringles, changer une ampoule, monter et démonter un meuble.</p>
                </div>
                </Link>
                </div>
                <div className='image'>
                <Link to="/demenegamet">
                <img className='service_img' src={Demenagement} alt='' />
                <div className='content'>
                <h2 className="erty">Déménegament</h2>
                <p> démonte, emballe, charge, transporte, déballe et remonte les meubles et objets du foyer.</p>
                </div>
                </Link>
                </div>
                <div className='image'>
                <Link to="/menage">
                <img className='service_img' src={Menage} alt='' />
                <div className='content'>
                <h2>Ménage</h2>
                <p> Épousseter, ranger, nettoyer, laver, faire briller, détartrer, dégraisser.</p>
                </div>
                </Link>
                </div>
                <div className='image'>
                <Link to="/peinture">
                <img className='service_img' src={Peinture} alt='' />
                <div className='content'>
                <h2>Peinture</h2>
                <p>Enlever une tache de peinture glycéro sur le mur.</p>
                </div>
                </Link>
                </div>
                <div className='image'>
                <Link to="/animaux">
                <img className='service_img' src={Animaux} alt='' />
                <div className='content'>
                <h2>Animaux</h2>
                <p> Crée, aménage et entretient parcs, jardins et terrains de sport.</p>
                </div>
                </Link>
                </div>
                <div className='image'>
                <Link to="/informatque">
                <img className='service_img' src={Informatique} alt='' />
                <div className='content'>
                <h2>Informatique</h2>
                <p> Brancher et installer le matériel, les périphériques et les dispositifs.</p>
                </div>
                </Link>
                </div>
                <div className='image'>
                <Link to="/revements">
                <img className='service_img' src={Second} alt='' />
                <div className='content'>
                <h2>Revêtement Sol</h2>
                <p> Poser, remplacer ou réparer des moquettes, des tapis d'escalier...</p>
                </div>
                </Link>
                </div>
            
            </div>
            </div>
          
    )
}

export default Service;