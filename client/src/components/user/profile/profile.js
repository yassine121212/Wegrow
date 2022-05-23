import React, {Children, useEffect, useState,useRef,useContext } from 'react';
import "./profile.css";
import axios from "axios";
import pic from "../../../images/logo192.png" 
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaFacebookF} from "react-icons/fa";
import {BsInstagram,BsTwitter} from "react-icons/bs";
import {AiOutlineEdit} from "react-icons/ai";
import {SiAtom} from "react-icons/si";
import { AuthContextProvider } from '../../../store/authcontext';
import AddCompetence from "./addCompetence";
const Profile = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState({
                                      "firstName":null,"email":null,
                                      "lastName":null,"phone":null,
                                      "userName":null,"Address":null,
                                      "city":null
                                       
                                    });

    const [details, setDetails] = useState([])
    const [modify_details, setmodify_details] = useState(false);

     const usePreviousValue = value => {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        });
        return ref.current;
      };
      const prevCount = usePreviousValue(details);
    
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
                     "city":res.data.user.city
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
    function handleModify() {
        setmodify_details(true)
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
                <div className="row">
                    <div className="col-12 bg-white p-0 px-3 py-3 mb-3">
                        <div className="d-flex flex-column align-items-center">
                        <img height="75%" src={pic} alt=""></img>

                            <p className="fw-bold h4 mt-3">{data.userName}</p>
                            <p className="text-muted">Full Stack Developer</p>
                            <p className="text-muted mb-3">{data.Address}</p>
                            <div className="d-flex ">
                                <div className="btn btn-primary follow me-2">Follow</div>
                                <div className="btn btn-outline-primary message">Message</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 bg-white p-0 px-2 pb-3 mb-3">
                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                            <p><SiAtom className="browser"/>Website</p>
                            <p>https://bootdey.com</p>
                        </div>
                        
                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                            <p><BsTwitter className="twitter" />Twitter</p>
                            <p>@bootdey</p>
                        </div>
                        <div className="d-flex justify-content-between border-bottom py-2 px-3">
                            <p> <BsInstagram className="insta"/>Instagram</p>
                            
                            <p>bootdey</p>
                        </div>
                        <div className="d-flex justify-content-between py-2 px-3">
                            <p><FaFacebookF className="fb" />facebook</p>
                          <p>bootdey</p>  
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-7 ps-md-4">
                <div className="row">
                    <div className="col-12 bg-white px-3 mb-3 pb-3">
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <p className="py-2">Full Name</p>
                            <p className="py-2 text-muted">{data.firstName} {data.lastName} </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <p className="py-2">Email</p>
                            <p className="py-2 text-muted">
                            <span style={{"color":"red"}}>{data.email}</span>
 </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <p className="py-2">Phone</p>
                            <p className="py-2 text-muted">{data.phone}</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <p className="py-2">Address</p>
                            <p className="py-2 text-muted"> {data.Address}</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <p className="py-2">city</p>
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
    </div>)}
   
    </>
    );
}
export default Profile;