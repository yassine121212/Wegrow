import React, { useState, useEffect } from "react";

 const AuthContext = React.createContext({
  isLoggedIn: false,
  id:0,
  onLogout: () => {},
   onLogin: (email,password) => { },
 });

 export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState(null);
   useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    const storedUserId = localStorage.getItem("id");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn("true");
      setId(storedUserId);
       
    }
    
   }, []);

 

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    window.localStorage.clear();
    localStorage.setItem("isLoggedIn",0)
     window.location = "/";
  };
   

  
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        id:id,
        onLogout: logoutHandler,
      
       }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;