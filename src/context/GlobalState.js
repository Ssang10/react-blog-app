import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <GlobalContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
