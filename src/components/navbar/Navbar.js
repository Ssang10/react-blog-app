import React, { useEffect, useState } from "react";
import NavMenu from "./navMenu/NavMenu";
import NavMenuMobile from "./navMenuMobile/NavMenuMobile";
import { CgMenu } from "react-icons/cg";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <nav className="nav-bar">
      <h1 className="blog-heading">My Blog</h1>
      <div className="normal-menu">
        <NavMenu />
      </div>
      <div className="mobile-menu">
        <CgMenu className="hamburger" onClick={() => setOpen(!open)} />
        {open && <NavMenuMobile setOpen={setOpen} />}
      </div>
    </nav>
  );
};

export default Navbar;
