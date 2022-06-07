import React, { useState, useEffect } from 'react'
import { Avatar } from '@mui/material';
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import axios from "axios";
import "./EditPicture.css";



const EditPicture = ({datauser2,setOnEditPicture}) => {
   
    const [image,setImage] = useState({});
    const [error, setError] = useState(null);
    const fileOnChange = (event) =>{
       setImage(event.target.files[0]);
    }
    const handleInput = e => {
      const { name, value } = e.target
      setUserData({ ...userData, [name]:value })
  }
  const initState = {
    lastName: datauser2.lastName,firstName:datauser2.firstName,userName:datauser2.userName, email: datauser2.email, phone: datauser2.phone, Address: datauser2.Address, city: datauser2.city

}

  const [userData, setUserData] = useState(initState)

    const sendImage =async () => {
      try {
      let formData = new FormData();
      formData.append("avatar",image);
                 
                    const username = localStorage.getItem("username");
                     
                    const url = "http://localhost:8080/api/users/image/";
                    const res = await axios.put(url + username,formData);
                    const url2 = "http://localhost:8080/api/users/";
                      const res2 = await axios.put(url2 + username,userData);
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
            
                
  }
  return (
    <div className="edit_profile">
            <button className="btn btn-danger btn_close"
            onClick={() => setOnEditPicture(false)}>
                Close
            </button>
           <form>
            <div className="info_avatar">
            <img  className=' avatar2' src={"http://localhost:8080/static/"+datauser2.profilePicture} alt=""></img>
                       <CameraAltIcon className='avatar' ></CameraAltIcon>
                        <input type="file" id="file_up" name="profilePicture"
                         onChange={ fileOnChange} />
                </div>
                <label htmlFor="userName">userName</label>
                <input type="text" className="form-control" id="userName"
                        name="userName" value={userData.userName} onChange={handleInput} />
                <button className="btn btn-info w-100" type="submit" onClick={sendImage}>Save</button>
           </form>

            </div>
  )
}

export default EditPicture;