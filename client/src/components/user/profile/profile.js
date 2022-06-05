import React, {Children, useEffect, useState} from 'react';
import "./profile.css";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiOutlineEdit} from "react-icons/ai";
import AddCompetence from "./addCompetence";
import EditProfile from './EditProfile'
import EditPicture from './EditPicture'
import { GoKey } from "react-icons/go";
import { BiMessageDetail } from "react-icons/bi";
import { RiUserFollowLine } from "react-icons/ri";
import { SiNamecheap } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import { FaAddressCard } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { RiMessageFill } from "react-icons/ri";




const Profile = () => {
    <script>
function myFunction() {
  document.body.style.background = "#E8E8E8 "
}
</script>

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState({
                                      "firstName":null,"email":null,
                                      "lastName":null,"phone":null,
                                      "userName":null,"Address":null,
                                      "city":null,"profilePicture":null
                                       
                                    });

    const [details, setDetails] = useState([])
    const [modify_details, setmodify_details] = useState(false);
    const [modify_detailsuser, setmodify_detailsuser] = useState(false);
    const [modify_detailsdata, setmodify_detailsdata] = useState(false);
    const [modify_detailslinks, setmodify_detailslinks] = useState(false);
    const [onEdit, setOnEdit] = useState(false);
    const [onEditPicture, setOnEditPicture] = useState(false);
    const [image,setImage] = useState({});
    const fileOnChange = (event) =>{
       setImage(event.target.files[0]);
    }
     const sendImage = (event) =>{
         let formData = new FormData();
         formData.append("avatar",image);
         fetch("http://localhost:8080/uploadFile",{
             method:"post",
             body:formData
         }).then(res=>res.text()).then(resBody=>{
             console.log(resBody);
                     })
     }
     
    const handleSubmit = async () => {
        setIsLoading(true);

    try {
        const username=localStorage.getItem("username")
        const url = "http://localhost:8080/api/users/we/";
        const  res  = await axios.get(url + username);
        if(res.status===200)
        {
            console.log(res)
            setData({"firstName":res.data.user.firstName,"email":res.data.user.email,
                     "lastName":res.data.user.lastName,"phone":res.data.user.phone,
                     "userName":res.data.user.userName,"Address":res.data.user.Address,
                     "city":res.data.user.city,"profilePicture":res.data.user.profilePicture
                     })
            
          
        }
     


  } catch (error) {
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            setError(error.response.data.message);
        }
    }
    setIsLoading(false);

}

  const sendnewdet = async () => {
    setIsLoading(true);

 try {
   const id = localStorage.getItem("id");
    
   const url = "http://localhost:8080/api/users/";
   const res = await axios.put(url + id,data);
        if(res)
             console.log("user updated")
 } catch (error) {
   if (
       error.response &&
       error.response.status >= 400 &&
       error.response.status <= 500
   ) {
       setError(error.response.data.message);
   }
 }
 setIsLoading(false);
 
 }
    function handleModify() {
        setmodify_details(true)
    }
    function handleModifyuser() {
        setmodify_detailsuser(true)
    }
    function handleModifydata() {
        setmodify_detailsdata(true)
    }
    function handleModifylinks() {
        setmodify_detailslinks(true)
    }
useEffect(() => {
    handleSubmit();
 },[]);
    return( 
        <>
        {
            error && (
                <div style={{"color": "red"}}>
                    Oop ! Impossible de charger la page,s'il vous plâit contactez nous...
                </div>
            )
        }
        {isLoading && (
            <div className='button_loader'>
     
            </div>
        )}
         {!isLoading && (
                         
        <div className="container">
        <div className="row">
             
            <div className="col-md-5">
            <AiOutlineEdit style={{ "margin-left":"11.2cm" }} className='button_edit_details' onClick={() => setOnEditPicture(true)}/>

                <div className="row">
                    <div className="col-12 bg-white p-0 px-3 py-3 mb-3">
                        <div className="d-flex flex-column align-items-center">
                        
                        <img height="75%" src={"http://localhost:8080/static/"+data.profilePicture} alt=""></img>

                            <p className="fw-bold h4 mt-3">{data.userName}</p>
                            <p className="text-muted">Full Stack Developer</p>
                            <p className="text-muted mb-3">{data.Address}</p>
                            <div className="d-flex ">
                            <button type="button" class="btn btn-success"> <RiUserFollowLine /> Follow</button>                        <button type="button" class="btn btn-info"> <BiMessageDetail /> Message </button>
                                <div className="info">
                        {
                            onEditPicture && <EditPicture  setOnEditPicture={setOnEditPicture} />
                        }
                        </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 bg-white p-0 px-2 pb-3 mb-3">
                    <AiOutlineEdit style={{ "margin-left":"11.2cm" }} className='button_edit_details' onClick={handleModifylinks}/>
                    <div className="row">
                    <div className="col-12 bg-white px-3 mb-3 pb-3">
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <p className="py-2"> <SiNamecheap />    Full Name</p>
                            <p className="py-2 text-muted">{data.firstName} {data.lastName} </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <p className="py-2"> <MdEmail />      Email</p>
                            <p className="py-2 text-muted">{data.email}</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <p className="py-2"><AiTwotonePhone />      Phone</p>
                            <p className="py-2 text-muted">{data.phone}</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <p className="py-2"><FaAddressCard />      Address</p>
                            <p className="py-2 text-muted"> {data.Address}</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <p className="py-2"><FaCity  />      city</p>
                            <p className="py-2 text-muted"> {data.city}</p>
                        </div>
                    </div>
                     <div className="col-12 bg-white px-3 pb-2">
                         <div className="modify">
                        <h6><i
                                className="text-info ">assignment </i>Project
                            Status</h6>
                            <AiOutlineEdit className='button_edit_details' onClick={handleModify}/>
                            </div>
                         <AddCompetence
                          dispo_Modif={modify_details} 
                          setModify={setmodify_details}
                          getDetails={setDetails}
                          
                           ></AddCompetence>
                          
                             <div className="info">
                        {
                            onEdit && <EditProfile datauser={data} setOnEdit={setOnEdit} />
                        }
                        </div>
                            <ul>
                            {Children.toArray(details.map(child =>
                               <>
                                 <small> {child.skill}</small>
                                 <div className="progress mb-3">
                                     <div className="progress-bar bg-primary" role="progressbar" style={{"width":child.level + "%"}}
                                         aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                 </div>
                                 </>
                            ))}
                            </ul>
                    </div>
                </div>
                    </div>
                </div>
            </div>
            <div className="col-md-7 ps-md-4">
            <AiOutlineEdit style={{ "margin-left":"16cm" }} className='button_edit_details'   onClick={() => setOnEdit(true)}/>
            <div className="row">
                    <div className="Title">
                        <div className='title1'>
                            <p className="py-1"> <GoKey /> Ses univers de Bricolage </p>
                        </div>
                        <div className='grid-container'>
                            <div className='item1'>
                                <h6 className='item111'> Bricolage Maison</h6>
                                     <div className='item11'>
                                    Serrurerie <br />
                                    pose ou réparation store <br />
                                    Tapisserie <br />
                                    Accroche murale <br />
                                    Détecteur de fumée
                                    </div>                      
                           </div>
                           <div className='item1'>
                           <h6 className='item112'> Peinture</h6>
                                     <div className='item11'>
                                    Peinture de meubles <br />
                                    Peinture de sol / plafond<br />
                                    Peinture mur<br />
                                    Rénovation de sol<br />
                                    Rénovation mur<br />
                                    </div>     
                           </div>
                           <div className='item1'>
                           <h6 className='item113'> Jardinage</h6>
                                     <div className='item11'>
                                    Portail, grillage et occultation<br />
                                    Serre, abri et garage<br />
                                    Sol pour terrasse et jardin<br />
                                    Entretien jardin<br />
                                    Aménagement jardin<br />
                                    Aménagement extérieur<br />
                                    Remise en état du sol<br />
                                    Tonte de pelouse
                                    </div>     
                           </div>
                        </div> <br />
                        <div className='title2'>
                            <p className="py-1"> <RiMessageFill /> pourquoi choisir XXXX </p>
                            <div className='row'>
                            <p> J'ai travaillé dans le domaine de la maintenance des trains pendant 10 ans. Actuellement formateur , j'ai toujours bricolé. J'aide souvent mes proches à réaliser leurs petits travaux ; le bricolage est un plaisir avant tout ! Il existe toujours une solution à un problème technique, j'aime me confronter à cette réflexion .
                                J'ai un CAP Mécanicien d'entretien (mécanique, hydraulique et électricité) et un BPT Maintenance. 
                                Je suis précis et ponctuel lors des RDV, j'aime le contact et je suis relativement disponible et arrangeant. 
                                Je suis titulaire du diplôme suivant : BEP - Industrie/Maintenance.</p>
                                </div>
                        </div>
                    </div>         
           </div>
            </div>
           
        </div>
    </div>
    
)}
   
    </>
    );
}
export default Profile;