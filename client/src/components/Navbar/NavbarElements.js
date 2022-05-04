import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
 
  height: 55px;
  grid-template-columns: 10rem 1fr 2fr 1fr 10rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;
  p {
    &:nth-child(2) {
      color: #fff;
    }
    &:nth-child(3) {
      font-size: 1.5rem;
      font-weight: 500;
      color: #e07924;
    }
  }
  svg {
    fill: #e07924;
    margin-right: 0.5rem;
  }
`;

export const Menu = styled.ul`
z-index: 1;
background-color: white;
height: 100%;
display: flex; 
list-style: none;
@media screen and (max-width: 960px) {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  position: absolute;
  top: 70px;
  max-height: ${({ open }) => (open ? "300px" : "0")}; //Import
  transition: max-height 0.3s ease-in;
  width: 100%;
  height: 90vh;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  align-items: center;

}
`;

export const MenuItem = styled.li`
font-size: 1.8rem;
display: flex;
margin-left:-1cm;
margin-right:0.4cm;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: ce;
    align-items: center;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: rgba(0, 0, 3, 0.8);
  font-family: "Times New Roman", Times, serif;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.5s ;
  text-decoration:none;
  &:hover {
   transform-origin: left;
  color: rgba(0, 0, 3, 1);
  transition: 0.5s;
    }
  }
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      display: none;
      fill: #e0792a;
      margin-right: 0.5rem;
    }
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    div {
      width: 30%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      fill: #111111;
      margin-right: 0.5rem;
    }
  }
`;