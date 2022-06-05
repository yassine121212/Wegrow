import React,{useState,useEffect} from 'react';
import axios from "axios";
import './AfficherFeedback.css';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {motion} from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";
 
const AfficherFeedback = () => {

  const [data, setData] = useState([]);
 
  const [error, setError] = useState("");
   

  

 
  const handleSubmit = async () => {

    try {
      const url = "http://localhost:8080/api/avis";
      const res  = await axios.get(url);
      if(res)
     {  console.log(res);
      setData(res.data)
    
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

  }
  useEffect(() => {
    
     handleSubmit();
 },[]);
  return (
    
    <div className='pmop'>
      <div>
         <h1 className="tit3">Nos Clients</h1></div> 
          <div className='section'>
       {data.map(( det ) =>
          <div  className='feed' key={det._id}>
                            <RiDoubleQuotesL className='fontquo quo1'/>

           <img className='zozoz' src={"http://localhost:8080/static/"+det.profilePicture} alt=""></img>

              <div className="name-review">{det.lastName} {det.firstName} </div>
              <div className="first-review">@{det.userName} </div>
           <div className='raiting'   >
         { Array(det.rating).fill()
       .map(() =>
                   
                    <AiFillStar
                      
                      style={{ color: "orange" }}
                       
                    />
                  )
                }
                 { Array(5 - det.rating).fill()
       .map(() =>
       <AiOutlineStar
      
       style={{ color: "orange" }}
     
       
     />
                  )
                }
                </div>
 
              <div class="desc-review">{det.comment}</div>
              <RiDoubleQuotesL className='fontquo quo2'/>


            </div>  )}
            </div>   </div>
  
  )
  
}

export default AfficherFeedback