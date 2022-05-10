import React, { useState, useEffect } from "react";

 const AuthContext = React.createContext({
  isLoggedIn: false,
  id:0,
  onLogout: () => {},
   onLogin: (email,password) => { },
 });

 export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState();
 
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
      setId(id);
    }
    const storedUserIdInformation = localStorage.getItem("id");
     setId(storedUserIdInformation);
      
   }, []);

 

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
     window.localStorage.clear();
    localStorage.setItem("isLoggedIn", 0);
     window.location = "/";
  };
  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
    
  };
  

  
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        id: id,
        onLogout: logoutHandler,
        onLogin: loginHandler,
     }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;