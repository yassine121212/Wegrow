import * as React from 'react';
import {useState}  from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from "axios";
import "./feedback.css"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
const Feedback = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
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
    };

    function handleKeyDown(e){
        const value = e.target.value;
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [number, setNumber] = useState();
    const [hoverStar, setHoverStar] = useState(undefined);
  
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
    <Button onClick={handleOpen}>Open modal</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        <h3>Donner Votre Avis</h3>
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
              
                   <textarea name="comment"	onChange={handleChange}	value={data.comment} onKeyDown={handleKeyDown}></textarea>
             
                 
            <button className={` ${!number && "disabled"} `} id="avis" onClick={handleSubmit}>Submit</button>
            
        </Typography>
      </Box>
    </Modal>
  </div>
  )
}

export default Feedback;