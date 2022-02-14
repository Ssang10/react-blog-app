import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [readPost, setReadPost] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        isAuth,
        setIsAuth,
        readPost,
        setReadPost,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
