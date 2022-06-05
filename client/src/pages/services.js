import React from 'react';
import { useState } from "react";
import axios from "axios";
import "./services.css";
import pic from "../images/renovation.png"
const Services = () => {

  const [data, setData] = useState({
    city: "",
    categorie: "",

  });
  const [datauser, setDatauser]=useState([]);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });

    };
    const [error, setError] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:8080/api/users/getdata/";
             const res  = await axios.get(url+data.city+"/"+data.categorie);
            
            console.log(res.data.data.Users)
  setDatauser(res.data.data.Users)
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }

    };
var states = new Array("Agadir", "Al Hoceima", "Azilal", "Beni Mellal", "Sidi Slimane", "Boulemane", "Casablanca", "Chaouen", "El Jadida", "El Kelaa des Sraghna", "Er Rachidia", "Essaouira", "Fes", "Figuig", "Guelmim", "Ifrane", "Kenitra", "Khemisset", "Khenifra", "Khouribga", "Laayoune", "Larache", "Marrakech", "Meknes", "Nador", "Ouarzazate", "Oujda", "Rabat-Sale", "Safi", "Settat", "Sidi Kacem", "Tangier", "Tan-Tan", "Taounate", "Taroudannt", "Tata", "Taza", "Tetouan", "Tiznit");

var cat = new Array("Animaux","Bricolage","Demenagement","Informatique","Jardinage","Menage","Peinture");
        return ( 
 <div class="cont_srv">
               <div class="credit-card">
     <div class="container_p">
      
      <div class="card-holder">
        <div class="crd-box bg-news">
           <div class="row">
        <div class="col-lg-6">
         <div class="imag-box">
           <img src={pic} class="img-fluid" />
         </div>
        </div>
        <div class="col-lg-6"> 
        
        <form class="fr">
          <div class="card-details">
          <h3 class="title">Trouver un prestataire</h3>
          <div class="row">
            <div class="form-group col-sm-8">
             <div class="inner-addon right-addon">
            <label for="card-holder">Sélectionner une catégorie</label>
                        
  <select name="categorie" onChange={handleChange} value={data.categorie} required>
      { cat.map(state => <option value={state}>{state}</option> )};
        </select>             </div> 
            </div>
           
            <div class="form-group col-sm-8">
             <div class="inner-addon right-addon">
            <label for="card-number">Sélectionner une ville</label>
                      
             <select      name="city"  onChange={handleChange} value={data.city} required>
      { states.map(state => <option value={state}>{state}</option> )};
        </select>
             </div> 
            </div>

               <div class="form-group col-sm-8">
             <div class="inner-addon right-addon">
           
            <button type="button" class="btn1 btn-primary btn-block" onClick={handleSubmit} >Chercher</button>
            </div>
             </div>
          </div>
          </div>
        </form>       
       
        </div>
      
           </div>
        </div>
      </div>   
      
     </div>
    </div>

<div class="serv_container">

        <div class="row">

     
      {
        datauser.map((val,key) => {
           return <div class="col-lg-4">
         
                <div class="card p-0">
                    <div class="card-image">
          <img src="https://images.pexels.com/photos/2746187/pexels-photo-2746187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
          </div>
           <div class="card-content d-flex flex-column align-items-center">
                        <h4 class="pt-2"> {val.lastName} {val.firstName}</h4>
                        <h5>Service {val.categorie}</h5>
                    </div>
    </div>
    <br/>
    </div>
 
          
        })
      }

</div>
   </div>

         
</div>

        );
    };

    export default Services;