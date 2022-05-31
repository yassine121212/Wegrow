import React from 'react';
import { useState } from "react";
import axios from "axios";
import "./style.css";
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
            <>
                <select name="city"  onChange={handleChange} value={data.city} required>
      { states.map(state => <option value={state}>{state}</option> )};
        </select>
                
                <br/>
         <select name="categorie" onChange={handleChange} value={data.categorie} required>
      { cat.map(state => <option value={state}>{state}</option> )};
        </select>
                <br/>
                <button onClick={handleSubmit} >Chercher</button>

<div >

     
      {
        datauser.map((val,key) => {
          return <div key={key} className="phone" >
             <h1>{val.lastName} {val.firstName}</h1>

    
          </div>
        })
      }
</div>
   

            </>
        );
    };

    export default Services;