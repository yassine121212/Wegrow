
import React,{useState,useContext,useEffect}  from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from "axios";
import "./feedback.css"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Swal from 'sweetalert2';
import AuthContext from "../../../store/authcontext";
import { Link, useNavigate } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#f2f3f3',
    boxShadow: 24,
    outline:'none',
    p: 4,
  };
  
const Feedback = () => {
  const context = useContext(AuthContext);
   const [error, setError] = useState("");
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [datauser, setDatauser] = useState({});

  const handleOpen = () => {if(context.isLoggedIn) setOpen(true);else navigate("/login");}
  const handleClose = () => setOpen(false);
  const [number, setNumber] = useState();
  const [hoverStar, setHoverStar] = useState(undefined);



  const handleuser = async () => {
 
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
        "profilePicture":res.data.user.profilePicture
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
 useEffect(() => {
  handleuser();
 }, []);
 useEffect(() => {
  setData({ ...data,...datauser });
}, [datauser]);

setTimeout(() => {
  localStorage.setItem("profilepic",datauser.profilePicture)
}, 5000);


 
  
     const handleChange = ({ currentTarget: input }) => {
      setData({ ...data, [input.name]: input.value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const url = "http://localhost:8080/api/avis";
        const { data: res } = await axios.post(url, data);
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
      setOpen(false);
      setData({});
      setNumber(0);
      Swal.fire(
        'Merci pour votre avis!',
        '',
        'success'
      );

    };

   
  
    const handleText = () => {
      switch (number || hoverStar) {
        case 0:
          return "Evaluer";
        case 1:
          return "Insatisfaction";
        case 2:
          return "Unsatisfaite";
        case 3:
          return "Normale";
        case 4:
          return "Satisfaite";
        case 5:
          return "Très satisfait";
        default:
          return "Evaluer";
      }
    };
  
  return (
    

    <div>
    <div className='aviss' onClick={handleOpen}>Votre Avis</div>
    {context.isLoggedIn && (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
         <h3>Laisser Votre Avis</h3> 
        <h2>{handleText()}</h2>
              {Array(5)
                .fill()
                .map((_, index) =>
                  number >= index + 1 || hoverStar >= index + 1 ? (
                    <AiFillStar
                      onMouseOver={() => !number && setHoverStar(index + 1)}
                      onMouseLeave={() => setHoverStar(undefined)}
                      style={{ color: "orange" }}
                      onClick={() => {

                        setNumber(index + 1)
                        setData({ ...data, "rating": hoverStar })
                      }}           
                    />
                  ) : (
                    <AiOutlineStar
                      onMouseOver={() => !number && setHoverStar(index + 1)}
                      onMouseLeave={() => setHoverStar(undefined)}
                      style={{ color: "orange" }}
                    
                      
                    />
                  )
                )}
                   <textarea name="comment"	onChange={handleChange}	value={data.comment} ></textarea>
               
            <button className={` ${!number && "disabled"} `} id="avis" onClick={handleSubmit}>Submit</button>
            
        </Typography>
      </Box>
    </Modal>
       )}
       
  </div>
 
  )
}


export default Feedback;