import React, { useState, useEffect } from 'react'
import { Avatar } from '@mui/material';
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import "./EditPicture.css"


const EditPicture = ({setOnEditPicture}) => {
   
    const [image,setImage] = useState({});
    const fileOnChange = (event) =>{
       setImage(event.target.files[0]);
    }
    const sendImage = () =>{
      let formData = new FormData();
      formData.append("avatar",image);
      fetch("http://localhost:8080/uploadFile",{
          method:"post",
          body:formData
      }).then(res=>res.text()).then(resBody=>{
          console.log(resBody);
                  })
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