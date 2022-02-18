import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalState";
import logout from "../../../firebase/services/auth/logout";

import "./navMenuMobile.css";

const NavMenuMobile = () => {
  const { isAuth, setIsAuth } = useContext(GlobalContext);

  const navigate = useNavigate();

  const handleSignOut = async () => {
    let signedOut = await logout();
    if (signedOut) {
      localStorage.clear();
      setIsAuth(false);
      navigate("login");
    }
  };

  return (
    <nav className="menu-mobile">
      <div className="link-container">
        <Link to="/">Explore</Link>
      </div>
      {isAuth && (
        <div className="link-container">
          <Link to="/yourposts">Your Posts</Link>
        </div>
      )}
      <div className="link-container">
        <Link to="/createpost">Create Post</Link>
      </div>
      <div className="link-container">
        {isAuth ? (
          <a onClick={handleSignOut}>Logout</a>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default NavMenuMobile;
