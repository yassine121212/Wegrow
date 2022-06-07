import React, { useState, useContext,useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AuthContext from "../../store/authcontext";
import logo from "../../images/logo192.png";
import logoimg from "../../images/Group 1.png";
import axios from "axios";
import { BsChatDots } from "react-icons/bs";

import "./navbar.css";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink ,
  MobileIcon,
} from "./NavbarElements";
import { FaBattleNet, FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FiLogIn } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";
import { Link  } from "react-router-dom";
  
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const context = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [data2, setData2] = useState({
  "profilePicture":null
     
  });
  const handleSubmit = async () => {

try {
    const username=localStorage.getItem("username")
    const url = "http://localhost:8080/api/users/we/";
    const  res  = await axios.get(url + username);
    if(res.status===200)
    {
        console.log(res)
        setData2({"profilePicture":res.data.user.profilePicture
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
}}
 useEffect(() => {
  handleSubmit();
},[]);
  return (
    <Container>
      <Wrapper >
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
                       <Link className="llink" to="/" onClick={() => setShowMobileMenu(!showMobileMenu)} >
                       
                      <img className="logoimg"  src={logoimg} alt=""></img>
                      <span className="egrow">e<span className="egrowl">g</span>r<span className="egrowl">o</span>w</span>
                       </Link >
 
          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem className="sec">
            <a className="llink" href="#about">
               <MenuItemLink>
                <div>About</div>
              </MenuItemLink >
              </a>
             </MenuItem>
            <MenuItem className="sec">
            <Link className="llink" to="/services" onClick={() => setShowMobileMenu(!showMobileMenu)} >
              <MenuItemLink  >
                <div>Services</div>
              </MenuItemLink >
              </Link >              
            </MenuItem>
             
            <div className="dio">
              {!context.isLoggedIn && (
                <MenuItem >
                  <Stack spacing={-8} direction="row">
                    <MenuItemLink 
                      href="/login"
                      onClick={() => setShowMobileMenu(!showMobileMenu)}
                    > 
                      <button className="custom-btn btn-5"> <FiLogIn /> Se Connecter</button>
                    </MenuItemLink >
                    
                  </Stack>
                </MenuItem>
              )}
            </div>
            {context.isLoggedIn && (
              <MenuItem >
                <div className="container_profile">
                <Link className="llink" to="/messenger" onClick={() => setShowMobileMenu(!showMobileMenu)} >
               <MenuItemLink className="chat">
                <BsChatDots  style={{ "fontSize":"0.6cm" }}></BsChatDots>
              </MenuItemLink >
              </Link >   
                  <div className="dropdown">
                    <div className="profile">
                      <img height="75%" src={"http://localhost:8080/static/"+data2.profilePicture} alt=""></img>
                      <div className="dropc">
                        <ul>
                          <Link className="llink" to="/profile">
                          <li>
                           <AiOutlineUser className="icon_user"></AiOutlineUser>
                            <span>Profile</span>
                          </li>
                          </Link >
                          
                          
                          <Link className="llink" to="/help" >
                          <li>
                            <BiHelpCircle  className="icon_user"></BiHelpCircle>
                            <span>Help</span>
                          </li>
                          </Link>
                          <Link className="llink" to="/" >
                          <li onClick={context.onLogout}>
                            <CgLogOut  className="icon_user"></CgLogOut>
                            <span>Logout</span>
                          </li>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </MenuItem>

            )}
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
