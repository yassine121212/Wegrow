import React,{useState,useEffect} from 'react';
import axios from "axios";
import './AfficherFeedback.css';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {motion} from "framer-motion";
import{Swiper,SwiperSlide}from'swiper/react';
import{FreeMode}from"swiper";
import'swiper/css';
import"swiper/css/free-mode";
  
const AfficherFeedback = () => {

  const [data, setData] = useState([]);
  const [datauser, setDatauser] = useState({
    "firstName":null,
    "lastName":null,
     
  });
  const [error, setError] = useState("");
  const username=localStorage.getItem("username");
  

  const recupererData = async () => {


try {
    const username=localStorage.getItem("username")
    const url = "http://localhost:8080/api/users/we/";
    const  res  = await axios.get(url + username);
    if(res.status===200)
    {
        console.log(res)
        setDatauser({"firstName":res.data.user.firstName,
                 "lastName":res.data.user.lastName,
                 "userName":res.data.user.userName,
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

}
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
    
    recupererData();
    handleSubmit();
 });
  return (
    
    <div className='pmop'>
    <div> 
         <h1 className="tit3">Nos Clients</h1></div>
         
         <div className='section'>
         
       
       {data.map(( det ) =>
       <Swiper
       freeMode={true}
       grabCursor={true}
       modules={[FreeMode]}
       className="mySwiper"
      spaceBetween={200}
    >
          <SwiperSlide>
          <motion.div drag="x" className='feed' key={det._id}>
              <motion.div className="name-review">{datauser.firstName}  {datauser.lastName}</motion.div>
              <motion.div className="first-review">@{datauser.userName}</motion.div>
           <motion.div className='raiting'   >
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
                </motion.div>
              <div class="desc-review">{det.comment}</div>
            
           
            </motion.div> 
             </SwiperSlide> 
             </Swiper>
             )
           
            }
            
    </div>
    
    </div> 
  )
  
}

export default AfficherFeedback