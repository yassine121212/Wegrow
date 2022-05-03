import React, { useState,useContext } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AuthContext from "../../store/authcontext";

import "./navbar.css";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from './NavbarElements';
import {
  FaBattleNet,
  FaBars,
  FaTimes,

} from 'react-icons/fa';
import { IconContext } from 'react-icons';
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const context = useContext(AuthContext);

  const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.setItem("isLoggedIn",0);
        
		window.location = "/";
	};
  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <FaBattleNet />
            <p>Vector -</p>
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem className="sec">
              <MenuItemLink href="/about" onClick={() => setShowMobileMenu(!showMobileMenu)} >
                <div>
                  About
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem className="sec">
              <MenuItemLink  href="/services" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  become a service provider
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem className="sec">
              <MenuItemLink href="/contact-us" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  Contact Us
                </div>
              </MenuItemLink>
            </MenuItem >
            <div class="dio">
            {!context.isLoggedIn &&
             <MenuItem className="sec ">
                 <Stack spacing={-8} direction="row">

             <MenuItemLink href="/login" onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <Button variant="contained">Sign In</Button>
             </MenuItemLink>
              <MenuItemLink  href="/register" onClick={() => setShowMobileMenu(!showMobileMenu)}>
             <Button  variant="contained" color="success">Sign Up</Button>
              </MenuItemLink>
              </Stack>
            </MenuItem>}
            </div>
             {context.isLoggedIn &&
             <MenuItem className="sec ">
            <Button variant="outlined" color="error" onClick={handleLogout}>Logout</Button>
            </MenuItem>}
           </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;