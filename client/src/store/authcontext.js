import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  id:0,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState(id);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("id");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
      setId(id);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
  

  
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        id: id
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;