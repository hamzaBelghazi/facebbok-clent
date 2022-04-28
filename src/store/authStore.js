import React, { useState } from "react";

const authContext = React.createContext({ user: [], isloggedIn: false });

export const AuthPorvider = ({ children }) => {
  const [userObj, setUserObj] = useState({});
  const [isloggedIn, setIsloggedIn] = useState(false);

  const setLoggedInUserHandler = (user) => {
    setUserObj(user);
    setIsloggedIn(true);
  };

  const setLoggedOutUserHandler = () => {
    setUserObj({});
    setIsloggedIn(false);
  };

  const context = {
    user: userObj,
    isloggedIn,
    userLoggedIn: setLoggedInUserHandler,
    userLoggedOut: setLoggedOutUserHandler,
  };

  return (
    <authContext.Provider value={context}>{children}</authContext.Provider>
  );
};

export default authContext;
