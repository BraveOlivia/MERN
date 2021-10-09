import React from "react";
import { Router, NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = () => {
  return (
    // <Router>
    <ul className="nav-links">
      <NavLink to="/" exact>
        <li>ALL USERS</li>
      </NavLink>
      <NavLink to="/u1/places" exact>
        <li>MY PLACES</li>
      </NavLink>
      <NavLink to="/place/new" exact>
        <li>ADD PLACE</li>
      </NavLink>
      <NavLink to="/auth" exact>
        <li>AUTHENTICATE</li>
      </NavLink>
    </ul>
    // </Router>
  );
};
export default NavLinks;
