import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import logout from "../../firebase/services/auth/logout";

import "./navbar.css";

const Navbar = () => {
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
    <nav className="nav-bar">
      <h1>My Blog</h1>

      <div>
        <Link to="/">Explore</Link>
        {isAuth && <Link to="/yourposts">Your Posts</Link>}

        {isAuth ? (
          <>
            <Link to="/createpost">Create Post</Link>
            <a onClick={handleSignOut}>Logout</a>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
