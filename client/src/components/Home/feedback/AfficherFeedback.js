import React,{useState,useEffect} from 'react';
import axios from "axios";
 
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
    
    <div>
      
       {data.map( det  =>
          <div key={det._id}>
              <p >{det.comment}</p>
              <p >{det.rating}</p>
              <p>{username}</p>
              <p>{datauser.firstName}</p>
              <p>{datauser.lastName}</p>
            </div>   )}
    </div>
  )
  
}

export default AfficherFeedback