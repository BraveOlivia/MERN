import React from "react";
import MainHeader from "./MainHeader";
import NaviLinks from "./NavLinks";
import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1>YourPlaces</h1>
      <nav>
        <NaviLinks />
      </nav>
    </MainHeader>
  );
};
export default MainNavigation;
