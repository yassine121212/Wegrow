import React, { useState, useEffect } from 'react'
import { Avatar } from '@mui/material';
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import axios from "axios";
import "./EditPicture.css";



const EditPicture = ({datauser,setOnEditPicture}) => {
   
    const [image,setImage] = useState({});
    const [error, setError] = useState(null);
    const fileOnChange = (event) =>{
       setImage(event.target.files[0]);
    }
    const sendImage =async () => {
      try {
      let formData = new FormData();
      formData.append("avatar",image);
                 
                    const username = localStorage.getItem("username");
                     
                    const url = "http://localhost:8080/api/users/";
                    const res = await axios.put(url + username,formData);
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
                    <Avatar sx={{ width: 120, height: 120 }}/>
                       <CameraAltIcon className='avatar' ></CameraAltIcon>
                        <input type="file" id="file_up" name="profilePicture"
                         onChange={ fileOnChange} />
                </div>

                <button className="btn btn-info w-100" type="submit" onClick={sendImage}>Save</button>
           </form>
           <img
          id="avatar"
          style={{
            display: "block"
          }}
        ></img>
            </div>
  )
}

export default EditPicture;