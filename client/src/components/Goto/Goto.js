import axios from "axios";
import { BiMessageDetail } from "react-icons/bi";
import { RiUserFollowLine } from "react-icons/ri";
import { useState } from "react";

const Goto =(props)=>{
     const [error, setError] = useState(null);
     const dataCnv={
         "senderId":localStorage.getItem("id"),
         "receiverId":props.id};
    const goMsg = async (e) => {
        e.preventDefault();
        try {
          const url = "http://localhost:8080/api/conversations/";
 
          const res  = await axios.post(url,dataCnv);
           console.log("ere")
           console.log(res.message);
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
    const toFollow=()=>{
     
    }
    return(
       <div>
           <button type="button" class="btn btn-info" onClick={goMsg}> <BiMessageDetail /> Message </button>
           <button type="button" class="btn btn-success" onClick={toFollow}> <RiUserFollowLine /> Follow</button>
       </div>
    );
}
export default Goto ;