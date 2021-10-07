import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NaviLinks = () => {
  return (
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
  );
};
export default NaviLinks;
